const { Router } = require("express");
const {
  postCorredorHandler,
  getAllCorredoresHandler,
  updateCorredorHandler,
  getCorredorByIdHandler,
  getCorredorByNameHandler,
  
} = require("../Handlers/CorredorHandlers");
const {
  sendmail
  
} = require("../Handlers/sendmail");
const CorredorRouter = Router();


CorredorRouter.post("/", postCorredorHandler);
CorredorRouter.get("/", getAllCorredoresHandler);
CorredorRouter.get("/name", getCorredorByNameHandler);
CorredorRouter.get("/:id", getCorredorByIdHandler);
CorredorRouter.put("/:id", updateCorredorHandler);
CorredorRouter.post("/sendmail", sendmail);

module.exports = CorredorRouter;
