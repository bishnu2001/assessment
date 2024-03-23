const mongoose = require("mongoose");

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect("mongodb+srv://jasbis2001:j0bqX5YFvan6APUC@cluster0.xhc7uxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.error("MongoDB connection error:", err));
  }
}

module.exports = Database;
