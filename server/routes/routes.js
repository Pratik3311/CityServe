const express = require("express");
const router = express.Router();
const Service = require("../models/service");

router.post("/services" ,async(req,res)=>{
    try{
        
        const newService = new Service(req.body);
        
        await newService.save();
       
        res.status(201).json(newService); // Use status code 201 for successful creation
    }
    catch(err){
        console.error("error is " ,err.message);
        res.status(500).send("Server Error")
    }
});

router.get("/services", async (req,res)=>{
    try{
        const services = await Service.find()
        res.json(services)
    }
    catch(err){
        console.error("Error is " , err.message);
        res.status(500).send("SErver Error")
    }
});



module.exports = router;