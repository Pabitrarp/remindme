const express=require("express");
const dbconnect=require("./service/db_connect");
const cors=require("cors");
const startcornjobs = require("./service/node-corn");

///import all routers//
const savereminderroute=require("./routers/savereminderroute");
const dotenv=require("dotenv");

//configuring dotenv//
dotenv.config();

const app=express();
app.use(cors());
 app.use(express.json());

 //connecting to database
 dbconnect();
 startcornjobs();
 require("./service/node-corn");
 app.use("/Pabitra/api/vi",savereminderroute);
app.listen(process.env.PORT || 8000,()=>{
    console.log("server is running on port 8000");
})