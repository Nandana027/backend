const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const candidateModel=require('./models/candidate')

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/candidate");

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    candidateModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("success")
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("No record existed")
        }
    })
})

app.post('/signup',(req,res)=>{
candidateModel.create(req.body)
.then(candidates => res.json(candidates))
.catch(err => res.json(err))
})

app.listen(3001,()=>{
    console.log("server connected")
})