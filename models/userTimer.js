
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userTimerSchema = new Schema({
  userName: { type: String, required: true },
  timerDate: { type: Date, default: 0 },
});

const UserTimer = mongoose.model("UserTimer", userTimerSchema);

module.exports = UserTimer;