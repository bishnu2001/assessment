const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const db = require("./config/db");

const authRoutes = require("./routes/auth.routes");
const studentRoutes = require("./routes/Student.routes");

const app = express();
const port = 4000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
