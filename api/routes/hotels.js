import express from "express";
import Hotel from '../models/Hotel.js'

const router = express.Router();

// CREATE
router.post("/", async (req,res)=>{
    const newHotel = new Hotel(req.body)
    try{
        const saveHotel =  await newHotel.save();
        res.status(200).json(saveHotel);
    }catch(err){
        res.status(500).json(err);
    }
})
// UPDATE
router.put("/:id", (req,res)=>{
    try{

    }catch(err){
        res.status(500).json(err);
    }
})

// DELETE
// GET
// GET ALL

export default router;