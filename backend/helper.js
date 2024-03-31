const mongoose = require("mongoose");
const fs = require('fs');
const Locations = require("./models/locations");

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/lifejacket")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

// Read JSON file
const jsonData = fs.readFileSync("static/donBoxes.json", "utf8");
const locationsData = JSON.parse(jsonData);

// Insert data into MongoDB
Locations.insertMany(locationsData)
  .then((result) => {
    console.log("Data inserted successfully:", result);
    mongoose.connection.close(); // Close the connection after inserting data
  })
  .catch((error) => {
    console.error("Error inserting data:", error);
    mongoose.connection.close();
  });
