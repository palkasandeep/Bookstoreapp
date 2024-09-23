import express from "express";
import { signup, login } from "../controller/user.controller.js";
const router = express.Router()

//here we are sending the data to verify this is post request
router.post("/signup", signup)
router.post("/login", login)


export default router;