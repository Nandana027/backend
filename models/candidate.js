const mongoose=require('mongoose')

const candidateSchema=new mongoose.Schema({
   name:String,
    email:String,
    password:String
})

const candidateModel=mongoose.model("candidates",candidateSchema)

module.exports=candidateModel