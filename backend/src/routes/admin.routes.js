import express from "express";
import { createCourse, DeleteCourse, login, logout, signup, updateCourse } from "../controllers/admin.controller.js";
const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

router.post("/", createCourse)
router.put("/:id", updateCourse)
router.delete("/:id", DeleteCourse)

export default router

