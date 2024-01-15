const router=require('express').Router()
// const { json } = require('stream/consumers');
const bookModel=require('../model/bookModel')


router.post("/add",async(req,res)=>{
    try{
        const data=req.body;
        const newBook=new bookModel(data)
        await newBook.save().then(()=>res.status(200).json({message:"Your book got added successfully"}))
    }
    catch(error){
        console.log(error)
    }
})
router.get("/get",async(req,res)=>{
    let book;
    try{
        book=await bookModel.find()
        res.status(200).json({book})
    }
    catch(error){
        console.log(error)
    }
})
router.get("/get/:id",async(req,res)=>{
    let book;
    let id=req.params.id
    try{
        book=await bookModel.findById(id)
        res.status(200).json({book})
    }
    catch(error){
        console.log(error)
    }
})
router.put("/update/:id",async(req,res)=>{
    let book;
    const id=req.params.id
    const {name,description,author,image,price}=req.body;

    try{
        book=await bookModel.findByIdAndUpdate(id,{name,description,author,image,price})
        res.status(200).json({book})
    }
    catch(error){
        console.log(error)
    }
})
router.delete("/delete/:id",async(req,res)=>{
    let book;
    const id=req.params.id
    try{
        book=await bookModel.findByIdAndDelete(id)
        res.status(200).json({book})
    }
    catch(error){
        console.log(error)
    }
})

module.exports=router