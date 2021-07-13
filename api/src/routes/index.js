const {Router} = require('express');
const dogRoutes = require('./dogs');
const temperamentRoutes = require('./temperament');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use('/dogs', dogRoutes);

router.use('/temperaments', temperamentRoutes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
