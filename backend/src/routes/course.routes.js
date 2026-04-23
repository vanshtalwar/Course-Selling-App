import express from "express";
import { createCourse, DeleteCourse, purchaseCourse, seeCourse, seePuchasedCourse, updateCourse } from "../controllers/course.controller.js";

const router = express.Router()

router.get("/", seeCourse)
router.get("/", seePuchasedCourse)

router.post("/", createCourse)
router.put("/:id", updateCourse)
router.delete("/:id", DeleteCourse)

export default router

