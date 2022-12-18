import express from "express";
import { get } from "mongoose";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotelController.js";
import Hotel from '../models/Hotel.js'
import { createError } from "../utils/error.js";

const router = express.Router();

// Hotel Router
router.post("/", createHotel)  // CREATE
router.put("/:id", updateHotel) // UPDATE
router.delete("/:id", deleteHotel) // DELETE
router.get("/:id", getHotel); // GET
router.get("/", getHotels) // GET ALL

export default router;