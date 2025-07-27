
const stuModel=require("../models/stuModels");
const homepage=(req,res)=>{
    res.render("home");
}
const insertpage=(req,res)=>{
    res.render("insert");
}

const stuSave=async(req,res)=>{
    const {rno,nm,sub,fees}=req.body;
    const student=await stuModel.create({
        rollno:rno,
        name:nm,
        subject:sub,
        fees:fees
    })
    console.log(req.body)
    res.render("insert");
}
const stuDisplay=async(req,res)=>{
    const student=await stuModel.find();
    console.log(student);
    res.render("display",{Data:student});
}
const updatepage=async(req,res)=>{
     const student=await stuModel.find();
     res.render("update",{Data:student});
}
const dataDelete=async(req,res)=>{
    const {id}=req.query;
    await stuModel.findByIdAndDelete(id);
     const student=await stuModel.find();
     res.render("update",{Data:student});
}
const editPage=async(req,res)=>{
    const {id}=req.query;
    const stuData=await stuModel.findById(id);
    console.log(stuData);
    res.render("editdata",{Data:stuData});

}
const editsave=async(req,res)=>{
    const {id,rollno,name,subject,fees}=req.body;
    await stuModel.findByIdAndUpdate(id,{
        rollno:rollno,
        name:name,
        subject:subject,
        fees:fees
    })
    const student=await stuModel.find();
    res.render("update",{Data:student});
    

}
module.exports={
    homepage,
    insertpage, 
    stuSave,
    stuDisplay,
    updatepage,
    dataDelete,
    editPage,
    editsave
    
    
}