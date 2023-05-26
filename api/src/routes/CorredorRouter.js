const { Router } = require("express");
const {
  postCorredorHandler,
  getAllCorredoresHandler,
  updateCorredorHandler,
  getCorredorByIdHandler,
  getCorredorByNameHandler,
  putCorredorLeadHandler,
  getValueLeadsHandler,
} = require("../Handlers/CorredorHandlers");
const { sendmail, sendHiringEmail } = require("../Handlers/sendmail");
const CorredorRouter = Router();

CorredorRouter.post("/", postCorredorHandler);
CorredorRouter.get("/", getAllCorredoresHandler);
CorredorRouter.get("/lead", getValueLeadsHandler);
CorredorRouter.get("/name", getCorredorByNameHandler);
CorredorRouter.get("/:id", getCorredorByIdHandler);
CorredorRouter.put("/:id", updateCorredorHandler);
CorredorRouter.post("/sendmail", sendmail);
CorredorRouter.post("/sendHiringEmail", sendHiringEmail);
CorredorRouter.put("/", putCorredorLeadHandler);

module.exports = CorredorRouter;
