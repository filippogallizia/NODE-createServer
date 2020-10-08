const EventEmitter = require("events");

class MyEmitter extends EventEmitter {};

// init object
const myEmitter = new MyEmitter();

//event listener
myEmitter.on("ciao", () => console.log("event fired"));

//init event

myEmitter.emit("ciao")