
const express=require("express");
const app=express();
const student=require("./routes/students");

app.use("/students",student)

app.listen(2000,()=>{
    console.log("server is running on port 2000");
})