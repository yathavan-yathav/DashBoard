require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const componentsRoute = require("./routes/components");

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors()); // Accept requests from frontend. For production, specify origin.
app.use(express.json({ limit: "5mb" }));

// Routes
app.use("/api/components", componentsRoute);

// Health
app.get("/", (req, res) => res.send("React-Tailwind-Cloudinary Backend is running"));

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error("MongoDB connection error:", err);
});
