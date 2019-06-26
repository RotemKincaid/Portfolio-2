const express = require("express");
const massive = require("massive");
const app = express();
require("dotenv").config();
const controller = require("./controller");
const session = require("express-session");
const authCtrl = require("./authController");

app.use(express.static(`${__dirname}/../build`));
app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Connected to db");
});

// message endpoints:

app.post("/api/messages", controller.addMessage);
app.get("/api/messages", controller.getMessages);
app.put("/api/messages/:id", controller.editMessage);

// auth endpoints:

app.route("/auth/login").post(authCtrl.login);
app.route("/auth/logout").get(authCtrl.logout);
app.route("/auth/user").get(authCtrl.getSession);

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(SERVER_PORT, () => {
  console.log(`server is running on port ${SERVER_PORT}`);
});
