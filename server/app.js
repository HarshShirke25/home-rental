const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

require("./db/conn");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});
