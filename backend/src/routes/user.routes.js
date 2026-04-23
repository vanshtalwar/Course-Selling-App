import express from "express";
import { login, logout, purchase, purchases, signup } from "../controllers/user.controller.js";
const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
router.get("/purchases", purchases)


export default router

