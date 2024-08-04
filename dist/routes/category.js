import { Router } from "express";
import { check } from "express-validator";
import { createCategory, getAllCategories } from "../controllers/categoryController.js";
const router = Router();
router.post("/", [
    check("name", "Name is required").not().isEmpty()
], createCategory);
router.get("/", getAllCategories);
export default router;
