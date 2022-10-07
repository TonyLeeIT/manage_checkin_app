const cron = require("node-cron");
const excuteShell = require("../service/excuteShell");
const { log } = require("../config/logger");

const restartApp = () => {
  cron.schedule("0 30 21 * * *", async () => {
    try {
      log.info("Prepare to Restart application");
      await excuteShell(`bash  ./restart.sh`);
      log.info("Restart app succeed");
    } catch (error) {
      log.info("Restart app fail :", error);
    }
  });
};

module.exports = restartApp;
