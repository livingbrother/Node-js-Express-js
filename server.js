

const express = require("express")
const dotEnv = require('dotenv')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const employeeRoutes = require("./routes/employeeRoutes")
// const cors = require("cors")
const ejs = require("ejs")


const app = express()
// app.use(cors());

const PORT = process.env.PORT || 5000
app.set("view engine", "ejs")

dotEnv.config()

app.use(bodyParser.json())

// creating route
// client side rendering
app.get('/mango',(req,res)=>{
    res.json({fruit:"mango"})
})

// Server side Rendering
app.get("/grapes", (req,res)=>{
   res.render('samplePage')
})

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("MongoDB connected Successfully!")
})
.catch((error)=>{
    console.log(`${error}`)
})

app.use("/employees", employeeRoutes)



app.listen(PORT, ()=>{
    console.log(`Server Created and running at ${PORT}`)
})