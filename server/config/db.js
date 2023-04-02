const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/crud-db")
    .then((response)=>console.log("Base de données connectée"))
    .catch((err)=>console.log(err))
}

module.exports = connectDB