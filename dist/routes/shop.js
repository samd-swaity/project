import { Router } from "express";
import { check } from "express-validator";
import { createShop, getShopById, getAllShops } from "../controllers/shopController.js";
const router = Router();
router.post("/", [
    check("shopName", "Shop name is required").not().isEmpty(),
    check("email", "Valid email is required").isEmail(),
    check("password", "Password is required").isLength({ min: 6 })
], createShop);
router.get("/", getAllShops);
router.get("/:id", getShopById);
export default router;
