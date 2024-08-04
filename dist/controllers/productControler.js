import { Product } from "../db/entities/Product.js";
import { Shop } from "../db/entities/Shop.js";
import { Category } from "../db/entities/Category.js";
export const createProduct = async (req, res) => {
    const { id, name, price, shopId, categoryId } = req.body;
    if (!id || !name || !price || !shopId || !categoryId) {
        return res.status(400).send({ error: "All fields are required" });
    }
    const shop = await Shop.findOneBy({ id: shopId });
    const category = await Category.findOneBy({ id: categoryId });
    if (!shop) {
        return res.status(404).send({ error: "Shop not found" });
    }
    const product = Product.create({
        id,
        name,
        price,
        shop,
    });
    product.categories = [category];
    await product.save();
    return res.status(201).json(product);
};
export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    return res.status(200).json(products);
};
export const getProductById = async (req, res) => {
    const productId = parseInt(req.params.id, 10);
    if (isNaN(productId)) {
        return res.status(400).send({ error: "Invalid shop ID" });
    }
    const product = await Product.findOneBy({ id: productId });
    if (product) {
        return res.status(200).json(product);
    }
    else {
        return res.status(404).send({ error: "Shop not found" });
    }
};
