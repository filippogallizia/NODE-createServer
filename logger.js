const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", {id: uuid.v4(), msg});
  }
};

const logger = new Logger();

logger.on("message", (data) => console.log("called", data))

logger.log("hello world")

module.exports = Logger