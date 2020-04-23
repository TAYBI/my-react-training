const express = require("express");
const config = require("./config");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

// eslint-disable-next-line no-console
app.listen(config.port, () => console.log(`listning on ${config.port}`));
