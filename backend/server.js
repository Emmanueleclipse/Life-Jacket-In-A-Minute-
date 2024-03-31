const express = require("express");
const mongoose = require("mongoose");
const Users = require("./models/users");
const Items = require("./models/items");
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

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a home page
app.get("/", (req, res) => {
  res.send("HomePage!!!");
});

// Define a route to add a new item
app.get("/api/locations", async (req, res) => {
  try {
    // Add a new item
    const locations = await Locations.find();
    res.json(locations);
  } catch (error) {
    console.error("Error fetching locations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Define a route to create a new user
app.post("/api/users", async (req, res) => {
  try {
    // Create a new user document
    const newUser = new Users(req.body);
    await newUser.save();
    res.send("User created");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
});

// Define a route to add a new item
app.post("/api/items", async (req, res) => {
  try {
    // Add a new item
    const newItem = new Items(req.body);
    await newItem.save();
    res.send("Item added");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding item");
  }
});

//safeguard for backend
app.use("*", (req, res) => res.status(404).json({ Message: "Bad Request" }));

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
