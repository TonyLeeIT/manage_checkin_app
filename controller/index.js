const router = require("express").Router();

const appRouter = require("./app")

router.use("/api/v1" , appRouter)

module.exports = router;