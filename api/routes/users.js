import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/userController.js";

const router = express.Router();

// User Router
router.get("/", getUsers) //Get all User
router.get("/:id", getUser) //Get User by Id
router.put("/:id", updateUser) //Update User
router.delete("/:id", deleteUser) //Deleter User



export default router;