const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const queueSchema = new Schema({
  active: { type: Boolean, default: false },
  userID: { type: String, defualt: "bob" }
});

const Queue = mongoose.model("Queue", queueSchema);

module.exports = Queue;