const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  resume: { type: String, required: true },
});

/* module.exports = mongoose.model('Student', studentSchema);
module.exports = { Student }; */

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
