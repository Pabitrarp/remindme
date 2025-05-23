const mongoose=require("mongoose");


const remindmeSchema=new mongoose.Schema({
    email:{
        type:String,
    },
    text:{
        type:String,
        require:true,
       }
    ,
    date:{
        type:Date,
       require:true,
    },
    method:{
        type:String ,
        require:true,
   },
   mobilenumber:{
    type:Number,
   }
},{timestamps:true,versionKey:false});

module.exports=mongoose.model("remindme",remindmeSchema);