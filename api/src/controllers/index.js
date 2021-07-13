const fetch = require('node-fetch');
const {Temperament} = require('../db');
const {Sequelize} = require('sequelize');
const Op = Sequelize.Op;
const {YOUR_API_KEY} = process.env;

class ModelCrud {
	constructor(model) {
		this.model = model;
	}

	getAll = (req, res, next) => {
		const {name} = req.query;
		if (name) {
			return this.model
				.findAll({
					where: {
						name: {
							[Op.iLike]: `%${name}%`,
						},
					},
				})
				.then(results => res.send(results))
				.catch(err => next(err));
		} else {
			return this.model
				.findAll()
				.then(results => res.send(results))
				.catch(err => next(err));
		}
	};
	getById = (req, res, next) => {
		const {idRaza} = req.params;
		return this.model
			.findByPk(idRaza)
			.then(results => res.send(results))
			.catch(err => next(err));
	};

	create = (req, res, next) => {
		const body = req.body;
		return this.model
			.create({
				...body,
			})
			.then(createdElement => res.send(createdElement))
			.catch(err => next(err));
	};
}

const temperaments = [];
fetch(`https://api.thedogapi.com/v1/breeds/?api_key=${YOUR_API_KEY}`)
	.then(response => response.json())
	.then(json => {
		json?.forEach(dog => {
			const dogsTemperaments = dog.temperament?.split(', ');
			dogsTemperaments?.forEach(t => {
				if (!temperaments.find(tp => tp.nameTemperament === t)) {
					temperaments.push({nameTemperament: t});
					console.log(temperaments);
				}
			});
		});
	})
	.then(() => {
		temperaments.forEach(t => {
			Temperament.findOrCreate({
				where: {
					nameTemperament: t.nameTemperament,
				},
			});
		});
	})
	.catch(err => console.error(err));

module.exports = ModelCrud;
