const express = require("express");
const { connectTOMongo } = require("./connection");
const path = require("path");
const cookieParser = require("cookie-parser");
const { checkForAuthorization, ristrictTo } = require("./middleware/userauth");
const urlRoutes = require("./router/url");
const staticRoute = require("./router/staticRouter");
const userRouter = require("./router/users");
const app = express();

const PORT = 8002;

/*
 *EJS, pug, handelbars are some of the Embedded JavaScript
 *tempelet which is used to style html from server side
 */

connectTOMongo("mongodb://localhost:27017/log").then(
  console.log("databse connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthorization);

app.use("/url", ristrictTo(["NORMAL"]), urlRoutes);
app.use("/user", userRouter);
app.use("/", staticRoute);

app.listen(PORT, () => console.log(`server started at port ${PORT}`));
