const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://Navyashree:chinnu29703@cluster0.vtdq7ej.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("mongodb connected");
})
.catch((e)=>{
    console.log("failed");
})

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phno:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Noofrooms:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    }
})

const UserCollection=new mongoose.model("UserCollection",UserSchema)
module.exports=UserCollection
