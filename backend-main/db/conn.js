const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const dotenv=require("dotenv").config();




const app=express();
app.use(cors());
app.use(express.json({limit:"10mb"}));

const PORT=process.env.PORT||6010;
//mongodb connection
console.log(process.env.MONGODB_URL)
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log("Connect to Database"))
.catch((err)=>console.log(err))