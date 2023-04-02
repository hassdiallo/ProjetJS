const router = require("express").Router()
const {getStudents, addStudent, getStudent, deleteStudent, updateStudent } = require("../controllers/student.controller")

router.get("/",getStudents)
router.get("/update-student/:id", getStudent)
router.post("/create-student", addStudent)
router.put("/update-student/:id", updateStudent)
router.delete("/delete-student/:id",deleteStudent)

module.exports = router