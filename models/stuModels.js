
const mongoose=require("mongoose");
const stuSchema=new mongoose.Schema({
     rollno:Number,
     name:String,
     subject:String,
     fees:Number
})

module.exports=mongoose.model("student",stuSchema);