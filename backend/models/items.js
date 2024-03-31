const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  category:{
    type: String,
  },
  size: {
    type: String,
  },
  color: {
    type: String,
  },
  description: {
    type: String,
  },
  photoUrl : {
    type: String
  },
  donatorsEmail : {
    type: String
  }
});

module.exports = mongoose.model("Items", ItemSchema);
