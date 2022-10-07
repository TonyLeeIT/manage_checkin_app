const excuteShell = require("./excuteShell");

const sendMsgTelegramByShellScrip = async (msg) => {
  await excuteShell(`bash  ./app.sh "${msg}"`);
};
module.exports = sendMsgTelegramByShellScrip;
