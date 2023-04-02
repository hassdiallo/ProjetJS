const express = require("express")
const app = express()
const PORT = 5000
const connectDB = require("./config/db")

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/students',require("./routes/student.route"))

app.listen(PORT,()=>{
    console.log("Serveur démarré")
})