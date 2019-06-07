const express = require("express");
const massive = require("massive");
const app = express();
require("dotenv").config();
const controller = require("./controller");

app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Connected to db");
});

// endpoints:

app.listen(SERVER_PORT, () => {
  console.log(`server is running on port ${SERVER_PORT}`);
});
