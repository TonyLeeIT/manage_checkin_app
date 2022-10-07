require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
const router = require("./controller");
app.use(router);
const { log } = require("./config/logger");

const restartApp = require("./job/restartApp");

restartApp();
app.listen(PORT, () => {
  log.info("Server is running with port : ", PORT);
});
