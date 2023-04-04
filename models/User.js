const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  password: String,
  email: String,
  type:String
});
module.exports = mongoose.model("User", UserSchema);
