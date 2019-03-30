
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userTextSchema = new Schema({
  //userID: { type: String, required: true },
  date: { type: Date, default: Date.now },
  UserText: { type: String, required: true }
});

const UserText = mongoose.model("UserText", userTextSchema);

module.exports = UserText;