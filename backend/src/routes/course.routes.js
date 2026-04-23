import express from "express";
import { createCourse, DeleteCourse, purchaseCourse, seeCourse, updateCourse } from "../controllers/course.controller.js";

const router = express.Router()

router.get("/", seeCourse)
router.post("/", createCourse)
router.put("/", updateCourse)
router.delete("/:id", DeleteCourse)

router.get("/purchase", purchaseCourse)


export default router

