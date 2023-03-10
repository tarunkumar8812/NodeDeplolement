const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const PORT = 5000
const MONGO_URL = "mongodb+srv://TarunKumar123:xLcX9W1SI9646ftM@cluster1.tpwtwiv.mongodb.net/BankingSystem"

const app = express()
// is global middleware
app.use(cors())
// app.use(cookieParser())
app.use(express.json())

// // error handling middleware + global middleware
// app.use((err, req, res, next) => {

//     const errorStatus = "err.status" || 500
//     const errorMessage = "err.message" || "Something went wrong!"

//     return res.status(errorStatus).json({
//         success: false,
//         status: errorStatus,
//         message: errorMessage,
//         stack: err.stack,
//     })
// })

app.use("/", (req, res) => {

    res.json({ status: true, message: "successful" })
})

mongoose
    .connect(MONGO_URL, { useNewUrlParser: true }, mongoose.set('strictQuery', true))
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err.message));



app.listen(PORT || 5000, (err) => {
    if (err) { throw err.message }
    else { console.log(`espress app running on ${PORT || 5000}`); }
})