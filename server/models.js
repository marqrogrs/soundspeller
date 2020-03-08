const con = require("./db");
const sequelize = require("sequelize");

const users = con.define("users", {
  id: {
    type: sequelize.INTEGER,
    allowNull: true,
    primaryKey: true
  },
  email: {
    type: sequelize.STRING,
    allowNull: true
  },
  password: {
    type: sequelize.TEXT,
    allowNull: true
  },
  name: {
    type: sequelize.STRING,
    allowNull: true
  }
});

con.sync().then(() => {
  return con;
});

module.exports = con;
