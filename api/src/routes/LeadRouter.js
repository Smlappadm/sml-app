const { Router } = require("express");
const {
  postLeadHandler,
  getAllLeadHandler,
  updateLeadHandler,
  getLeadByIdHandler,
  getLeadByNameHandler,
  getLeadCheckedHandler,
  getLeadUncheckedHandler,
  getLead10UncheckedHandler,
  getLeadCheckedInactive5Handler,
  updateLeadVendedorHandler,
  getLeadVendedorHandler,
  getLeadCorredorCheckedHandler,
} = require("../Handlers/LeadHandlers");
const LeadRouter = Router();

LeadRouter.get("/", getAllLeadHandler);
LeadRouter.get("/checked", getLeadCheckedHandler);
LeadRouter.get("/checkedinactive5", getLeadCheckedInactive5Handler);
LeadRouter.get("/unchecked", getLeadUncheckedHandler);
LeadRouter.get("/unchecked10", getLead10UncheckedHandler);
LeadRouter.get("/corredorchecked", getLeadCorredorCheckedHandler);
LeadRouter.get("/name", getLeadByNameHandler);
LeadRouter.get("/:id", getLeadByIdHandler);
LeadRouter.get("/leadvendedor/:id", getLeadVendedorHandler);
LeadRouter.post("/", postLeadHandler);
LeadRouter.put("/:id", updateLeadHandler);
LeadRouter.put("/vendedor/:id", updateLeadVendedorHandler);

module.exports = LeadRouter;
