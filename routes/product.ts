import { Router } from "express";
import { check } from "express-validator";
import { createProduct, getAllProducts, getProductById } from "../controllers/productControler.js";

const router = Router();

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("price", "Price is required").isFloat({ gt: 0 }),
    check("shopId", "Shop ID is required").isInt(),
    check("categoryIds", "Category IDs are required").isArray()
  ],
  createProduct
);

router.get("/", getAllProducts);
router.get("/:id", getProductById);

export default router;
