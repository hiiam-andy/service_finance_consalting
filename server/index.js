require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const models = require("./models/models");
const router = require("./routes/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

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
