const database = require("./database");

const path = require("path");

const express = require("express");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../public")));

app.get("/test", (req, res) => {
  res.send("🤗");
});

const port = process.env.PORT || 3000;
app.listen(port, (err) => console.log(err || `listening on port ${port} 😎`));
