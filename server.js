const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes"); // Correct path to the authRoutes file

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Allow cross-origin requests

// Use routes from authRoutes
app.use("/api", authRoutes); // All routes defined in authRoutes will now start with /api

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/yourdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// Start the server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
