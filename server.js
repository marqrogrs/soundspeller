const express = require("express");
const env = require("dotenv").config({ path: ".env" });

const mysql = require("mysql2");

const cors = require("cors");
const path = require("path");

const app = express();

// Option 1: Passing parameters separately
const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.db,
  password: process.env.password,
  database: process.env.db
});

app.use(cors());

app.get("/word", (req, res) => {
  connection.query("SELECT * FROM `ssLexicon` WHERE `id` = 1", function(
    err,
    results,
    fields
  ) {
    console.log(results); // results contains rows returned by server
    res.json({ data: results });
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
