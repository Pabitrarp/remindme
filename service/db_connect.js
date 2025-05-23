const mongoose=require("mongoose");

const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        
        console.log("coneected to database");
    }
    catch(error){
        console.log(error.message);
        process.exit(1);
    }
}
module.exports=connectDb;