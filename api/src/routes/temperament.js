const {Router} = require('express');
const {Temperament} = require('../db');
const temperamentController = require('../controllers/temperament');
const router = Router();

router.get('/', temperamentController.getAll);

module.exports = router;
