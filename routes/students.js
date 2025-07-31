
const express=require("express");
const route=express.Router();
const stuController=require("../controllers/stuController")
route.get("/",stuController.homepage)
route.get("/insert",stuController.insertpage)
route.post("/save",stuController.stuSave);
route.get("/display",stuController.stuDisplay);
route.get("/update",stuController.updatepage);
route.get("/datadelete",stuController.dataDelete);
route.get("/editdata",stuController.editPage);
route.post("/editsave",stuController.editsave);
route.get("/search",stuController.searchPage);
route.post("/searchdata",stuController.searchData);




module.exports=route;