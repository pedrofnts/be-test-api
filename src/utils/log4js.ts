import log4js from "log4js";

log4js.configure({
  appenders: {
    console: { type: "console" },
    file: { type: "file", filename: "api.test.load.log" },
  },
  categories: {
    default: { appenders: ["console", "file"], level: "debug" },
  },
});

const loadTestLogger = log4js.getLogger();

export default loadTestLogger;
