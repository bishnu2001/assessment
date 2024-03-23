const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const { connectdb } = require("./config/db");
connectdb();
const cookieparser = require("cookie-parser");
// const authRoutes = require('./routes/authRoutes');
// const verifyToken = require('./middleware/verifyToken');
const authoutes = require("./routes/auth.routes");
const studentroutes = require("./routes/Student.routes");
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});
app.use("/api/auth", authoutes);
app.use("/api/student", studentroutes);
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
