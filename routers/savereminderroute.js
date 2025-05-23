const express=require("express");
const saveriminder=require("../controller/savereminder")
const router=express.Router();

router.post("/savereminder",saveriminder);

module.exports=router;