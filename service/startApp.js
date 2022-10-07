const excuteShell = require("./excuteShell");
const sendMsgTelegramByShellScrip = require("./telegram");
const { log } = require("../config/logger");

const startApp = async () => {
  try {
    log.info("Prepare to start application");
    await excuteShell(`bash  ./start.sh`);
    log.info("Start app succeed");
    await sendMsgTelegramByShellScrip(`Start app succeed`);
  } catch (error) {
    log.info("Start app fail :", error);
    await sendMsgTelegramByShellScrip(`Start app fail`);
  }
};

module.exports = startApp;
