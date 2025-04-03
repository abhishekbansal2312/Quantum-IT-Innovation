const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(
  cors({
    origin: true,
  })
);
app.use(express.json());

// Define routes
app.use("/api/auth", require("./routes/auth"));

// Basic route
app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
