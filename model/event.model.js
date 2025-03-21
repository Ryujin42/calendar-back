const { DataTypes } = require("sequelize");
const { bdd } = require("./../framework/connexion.js");

const Event = bdd.define("event", {
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  lieu: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

module.exports = Event;
