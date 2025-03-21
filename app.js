const express = require("express");
const { connect } = require("./framework/connexion.js");
const eventRouter = require("./route/event.route.js");

const app = express();

const database = async () => {
  await connect();
};

database();

app.use(express.json());
app.use("/event", eventRouter);

module.exports = app;
