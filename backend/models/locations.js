const mongoose = require("mongoose");

const LocationsSchema = new mongoose.Schema({
  locationId: {
    type: Number,
  },
  locationName:{
    type: String,
  },
  numberDonBoxes: {
    type: Number,
  }
});

module.exports = mongoose.model("Locations", LocationsSchema);
