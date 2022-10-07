const router = require("express").Router();
const startApp = require("../service/startApp");
const stopApp = require("../service/stopApp");

router.get("/stop", (req, res) => {
  stopApp()
    .then(() => {
      res.status(200).json({
        message: "sucess",
      });
    })
    .catch(() => {
      res.status(400).json({
        message: "fail",
      });
    });
});

router.get("/start", (req, res) => {
  startApp()
    .then(() => {
      res.status(200).json({
        message: "sucess",
      });
    })
    .catch(() => {
      res.status(400).json({
        message: "fail",
      });
    });
});

module.exports = router;
