const userRouter = require("express").Router();
const userController = require("../controllers/userController");

userRouter.post("/users/register", userController.register);

module.exports = userRouter;
