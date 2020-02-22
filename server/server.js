const express = require("express");
const env = require("dotenv").config({ path: "./../.env" });

const mysql = require("mysql2");

const cors = require("cors");
const path = require("path");

const app = express();

const con = mysql.createConnection({
  host: process.env.host,
  user: process.env.db,
  password: process.env.password,
  database: process.env.db
});

app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
