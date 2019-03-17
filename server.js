const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const fs = require("fs");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

const server = app.listen(3000, () => {
  console.log("Express server has started on port 3000");
});

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
  secret: '@#@$MYSIGN#@$#$',
  resave: false,
  saveUninitialized: true,
}));

const router = require('./router/main')(app, fs);