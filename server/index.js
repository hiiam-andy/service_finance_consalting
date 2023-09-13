require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "HI" });
});

const PORT = process.env.PORT || 4000;

const start = () => {
  try {
    sequelize.authenticate();
    sequelize.sync();
    app.listen(PORT, () => console.log(`started ${PORT}`));
  } catch (err) {
    console.log("ошибка " + err);
  }
};

start();
