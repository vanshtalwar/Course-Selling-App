import express from "express";
import { login, logout, signup, users } from "../controllers/auth.controller.js";
const router = express.Router()

router.get("/users", users)
router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

export default router

