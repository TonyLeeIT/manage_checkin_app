const excuteShell = require("./excuteShell");
const sendMsgTelegramByShellScrip = require("./telegram");
const { log } = require("../config/logger");

const stopApp = async () => {
  try {
    log.info("Prepare to stop application");
    await excuteShell(`bash  ./stop.sh`);
    log.info("Stop app succeed");
    await sendMsgTelegramByShellScrip(`Stop app succeed`);
  } catch (error) {
    log.info("Stop app fail :", error);
    await sendMsgTelegramByShellScrip(`Stop app fail`);
  }
};

module.exports = stopApp;
