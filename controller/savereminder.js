const remindermodel=require("../models/remindme");

const saveriminder=async(req,res)=>{
    try {
        const {email,text,date,method,mobilenumber}=req.body;
        const response=await remindermodel.create({email,text,date,method,mobilenumber});
        if(response){
            res.status(200).json({
                message:"Reminder saved successfully",
                data:response
            })
        }
        else{
            res.status(400).json({
                message:"Reminder not saved",
                data:null,
            })
        }
        
    } catch (error) {
        res.status(500).json({
            messgage:"Internal server error",
            data:error.message
        })
    }
}
module.exports=saveriminder;