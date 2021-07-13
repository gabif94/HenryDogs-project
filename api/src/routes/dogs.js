const {Router} = require('express');
const {Dog} = require('../db');
const dogController = require('../controllers/dogs');
const router = Router();

router.get('/', dogController.getAll);

router.get('/:idRaza', dogController.getById);

router.post('/', dogController.create);

module.exports = router;
