const {Temperament} = require('../db');
const ModelCrud = require('./index');

class TemperamentModel extends ModelCrud {
	constructor(model) {
		super(model);
	}
	getAll = async (req, res, next) => {
		await Temperament.findAll()
			.then(results => res.json(results))
			.catch(err => next(err));
	};
}

const temperamentController = new TemperamentModel(Temperament);

module.exports = temperamentController;
