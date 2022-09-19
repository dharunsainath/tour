import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

const app = express()
import router from "./routes/user.js"
app.use(morgan("dev"))

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
 const MONGODB_URL = "mongodb+srv://dharunn:snehamurali@tour.orqg9ty.mongodb.net/?retryWrites=true&w=majority"
const port = 8000


app.get("/", (req, res) => {
    res.send("hello")

})
app.use("/users", router)


mongoose.connect(MONGODB_URL).then(()=>{
    app.listen(port,()=>{
        console.log("db connected")
    })
}).catch((e)=>console.log(e))
