const {Router} = require("express");
const authRouter = Router();
const {getAuthHandler} = require("../Handlers/authHandler");

//authRouter.post("/user/login", postAuthHandler);
authRouter.get("/",getAuthHandler)

module.exports = authRouter;