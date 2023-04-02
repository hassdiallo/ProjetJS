const Student = require("../models/student.model")

module.exports.getStudents = async (req,res) =>{
    try{
        const students = await Student.find()
        res.json(students)

    }catch(error){
        res.status(400).json(error)
    }
}

module.exports.getStudent = async (req, res) => {
    const student = await Student.findById(req.params.id)
    if (!student) return res.status(400).json("L'étudiant n'existe pas")

    res.json(student)
    
}

module.exports.addStudent = async (req, res) =>{
    const isEmailExist = await Student.findOne({email: req.body.email})
    if (isEmailExist) return res.status(400).json("Cet email est déjà pris")

    const newStudent = new Student({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })

    try{
        const student = await newStudent.save()
        res.json(student)
    }catch(error){
        res.status(400).json(error)
    }
}

module.exports.deleteStudent = async (req,res) =>{
    const student = await Student.findById(req.params.id)
    if (!student) return res.status(400).json("L'étudiant n'existe pas")

    try {
        await student.deleteOne()
        res.json("étudiant supprimé : "+req.params.id)
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports.updateStudent = async (req, res) => {
    const student = await Student.findById(req.params.id)
    if (!student) return res.status(400).json("L'étudiant n'existe pas")

    try {
        const studentUpdated = await Student.findByIdAndUpdate(
            student,
            req.body,
            {new: true}
        ) 
        res.json("bien modifié")
    } catch (error) {
        res.status(400).json(error)
    }
}

