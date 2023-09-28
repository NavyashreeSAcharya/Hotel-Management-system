const express=require("express")
const app=express()
const ejs=require("ejs")
const UserCollection=require("./mongodb")


app.use(express.json())
app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}))

app.get('/Booknow',(req,res)=>{
    res.render("Booknow")
})

app.post("/",async(req,res)=>{
    const data={
        name:req.body.name,
        phno:req.body.phno,
        email:req.body.email,
        Noofrooms:req.body.Noofrooms,
        type:req.body.type,
    }})
    app.listen(5500,()=>{
        console.log("port connected")
    })