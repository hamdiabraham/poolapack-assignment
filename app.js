require("dotenv").config();

const express = require("express");
const app = express();
const errorHandler = require("./middlewares/errorHandler");
const userRouter = require("./router");
const port = process.env.SERVER_PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`connected to ${port}`);
});
