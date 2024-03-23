const Student = require("../model/Student.model");

class StudentController {
  async createStudent(req, res) {
    try {
      const { name, email, contactNumber } = req.body;
      const { path: resume } = req.files;

      const newStudent = new Student({
        name,
        email,
        contactNumber,
        resume,
      });

      await newStudent.save();
      res.status(200).json({ message: Success });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: error });
    }
  }
}

module.exports = StudentController;
