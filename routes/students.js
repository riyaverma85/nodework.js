
const express=require("express");
const route=express.Router();

route.get("./home",(req,res)=>{
    res.send("Welcome to the student home page");
})

module.exports=route;