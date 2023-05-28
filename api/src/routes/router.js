const { Router } = require("express");
const router = Router();
const CLevelRouter = require("./CLevelRouter");
const CorredorRouter = require("./CorredorRouter");
const LeadRouter = require("./LeadRouter");
const LeaderRouter = require("./LeaderRouter");
const VendedorRouter = require("./VendedorRouter");
const EmployeesRouter = require("./EmployeesRouter");
const ProfileRouter = require("./ProfileRouter")

router.use("/employees", EmployeesRouter);
router.use("/clevel", CLevelRouter);
router.use("/corredor", CorredorRouter);
router.use("/lead", LeadRouter);
router.use("/leader", LeaderRouter);
router.use("/vendedor", VendedorRouter);
router.use("/profile", ProfileRouter);

module.exports = router;
