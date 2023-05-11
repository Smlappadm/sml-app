const { Router } = require('express');
const router = Router();
const CLevelRouter = require('./CLevelRouter');
const employeesRouter = require('./EmployeesRouter');
const leedsRouter = require('./leadsRouter');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/clevel', CLevelRouter);
router.use('/employees', employeesRouter);
router.use('/leads', leedsRouter);

module.exports = router;
