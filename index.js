const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')


//DataBase
const mongoose = require('mongoose')
mongoose.connect(process.env.DB).then(() => {
  console.log("Connected to DB")
})

//routers
const authRouter = require("./routes/authRouter")
const productRouter = require("./routes/productRouter")
const categoryRouter = require("./routes/categoryRouter")

const { json } = require('express')

//Server
const app = express()
const PORT = process.env.PORT || 8080

// app.use(cors())
app.use(express.json())

app.use("/", authRouter)
app.use('/product', productRouter)
app.use('/category', categoryRouter)

app.listen(PORT, () => {
  console.log("Server Running!!");
})

