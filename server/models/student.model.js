const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            require
        },
        age: {
            type: String,
            require
        },
        email: {
            type: String,
            require
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Student',studentSchema)