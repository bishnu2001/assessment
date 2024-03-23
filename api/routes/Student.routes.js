const express = require("express");
const router = express.Router();
const StudentController = require("../controller/student.controller");

const studentController = new StudentController();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/studentinfo", upload.single("resume"), async (req, res) => {
  await studentController.createStudent(req, res);
});

module.exports = router;
