const fetch = require('node-fetch');
const {Sequelize, json} = require('sequelize');
const {Dog, Temperament} = require('../db');
const ModelCrud = require('./index');
const {YOUR_API_KEY} = process.env;

class DogModel extends ModelCrud {
	constructor(model) {
		super(model);
	}
	getAll = async (req, res, next) => {
		const {name} = req.query;
		if (name) {
			const dogExist = await Dog.findOne({
				where: {name: name},
				include: {
					model: Temperament,
					attributes: {
						include: ['nameTemperament'],
						exclude: ['createdAt', 'updatedAt'],
					},
				},
				through: {attributes: []},
			});
			console.log(dogExist);

			if (dogExist === null) {
				fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
					.then(data => data.json())
					.then(async json => {
						let myDogs = await Dog.findAll({
							include: [
								{
									model: Temperament,
									required: true,
								},
							],
						});

						myDogs.forEach(dog => {
							if (dog.dataValues.name.includes(name)) {
								let myDogTemperaments = dog.dataValues.temperaments.map(
									t => t.dataValues.name
								);
								dog.dataValues.temperament = myDogTemperaments[0];
								json.push(dog.dataValues);
							}
						});

						if (json.length > 0) {
							let dogFound = [];
							for (let i = 0; i < json.length; i++) {
								let dog = {
									id: json[i].id,
									name: json[i].name,
									img: `https://cdn2.thedogapi.com/images/${json[i].reference_image_id}.jpg`,
									temperament: json[i].temperament || json[i].temperaments,
								};
								dogFound.push(dog);
							}
							res.json(dogFound);
						}
					})
					.catch(err => next(err));
			} else {
				res.send(dogExist);
			}
		} else {
			fetch(`https://api.thedogapi.com/v1/breeds/?api_key=${YOUR_API_KEY}`)
				.then(data => data.json())
				.then(async json => {
					const myDogs = await Dog.findAll({
						include: Temperament,
					});
					myDogs.forEach(dog => {
						let myDogTemperament = dog.dataValues.temperaments.map(t => {
							return t.dataValues.nameTemperament;
						});
						dog.dataValues.temperament = myDogTemperament[0];
						json.push(dog.dataValues);
					});

					const dog = json.map(doggie => {
						return {
							id: doggie.id,
							img: doggie.image && doggie.image.url,
							name: doggie.name,
							temperament: doggie.temperament,
						};
					});

					// dog.sort((a, b) => (a.name > b.name ? 1 : -1));
					res.json(dog);
				})
				.catch(err => next(err));
		}
	};

	getById = (req, res, next) => {
		const {idRaza} = req.params;
		if (idRaza.length > 10) {
			return this.model
				.findByPk(idRaza)
				.then(results => res.send(results))
				.catch(err => next(err));
		}
		fetch(`https://api.thedogapi.com/v1/breeds/?api_key=${YOUR_API_KEY}`)
			.then(data => data.json())
			.then(async json => {
				const dog = json.find(dog => dog.id === parseInt(idRaza));
				if (dog) {
					return res.json({
						img: dog.image && dog.image.url,
						name: dog.name,
						temperament: dog.temperament,
						weight: dog.weight.metric,
						height: dog.height.metric,
						life_span: dog.life_span,
					});
				} else {
					const myDogs = await Dog.findAll({
						include: [
							{
								model: Temperament,
								required: true,
							},
						],
					});
					const myDogsRequest = myDogs.find(
						dog => dog.dataValues.id === parseInt(idRaza)
					);
					if (myDogsRequest) {
						return res.json({
							img: myDogsRequest.dataValues.img,
							name: myDogsRequest.dataValues.name,
							temperament: myDogsRequest.dataValues.temperament[0].name,
							weight: myDogsRequest.dataValues.weight,
							height: myDogsRequest.dataValues.height,
						});
					}
					return res.status(404).json({message: 'Dog not found'});
				}
			})
			.catch(err => next(err));
	};

	create = async (req, res, next) => {
		const {name, height, weight, yearsoflife, nameTemperament} = req.body;
		try {
			const newDog = await Dog.create({
				name: name,
				height: height,
				weight: weight,
				yearsoflife: yearsoflife,
			});
			await newDog.addTemperaments(nameTemperament);
			res.status(200).send(newDog);
		} catch (error) {
			next(error);
		}
	};
}

const dogController = new DogModel(Dog);

module.exports = dogController;
