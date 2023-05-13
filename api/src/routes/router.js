const { Router } = require('express');
const router = Router();
const CLevelRouter = require('./CLevelRouter');
const CorredorRouter = require('./CorredorRouter');
const LeadRouter = require('./LeadRouter');
const LeaderRouter = require('./LeaderRouter');
const VendedorRouter = require('./VendedorRouter');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/clevel', CLevelRouter);
router.use('/corredor', CorredorRouter);
router.use('/lead', LeadRouter);
router.use('/leader', LeaderRouter);
router.use('/vendedor', VendedorRouter );

module.exports = router;
