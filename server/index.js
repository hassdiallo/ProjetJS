const express = require("express")
const app = express()
const cors = require('cors')
const PORT = 5000
const connectDB = require("./config/db")
const corsOption = {
    origin:"http://localhost:3000",
    optionsSuccessStatus:200
}

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors(corsOption))

app.use('/students',require("./routes/student.route"))

app.listen(PORT,()=>{
    console.log("Serveur démarré")
})