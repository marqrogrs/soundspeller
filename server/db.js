const path = require("path");
const env = require("dotenv").config({ path: path.basename("./../.env") });
const sequelize = require("sequelize");

const con = new sequelize(
  process.env.db_database,
  process.env.db_user,
  process.env.db_password,
  {
    host: process.env.db_host,
    dialect: "mysql",
    define: {
      timestamps: false
    }
  }
);

con
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = con;
