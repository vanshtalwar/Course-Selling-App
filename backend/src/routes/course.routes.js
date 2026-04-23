import express from "express";
import { preview, purchase } from "../controllers/course.controller.js";

const router = express.Router()

router.get("/", preview)
router.get("/", purchase)



export default router

