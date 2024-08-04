import { Category } from "../db/entities/Category.js";
export const createCategory = async (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
        return res.status(400).send({ error: "All fields are required" });
    }
    const category = Category.create({
        id,
        name,
    });
    await category.save();
    return res.status(201).json(category);
};
export const getAllCategories = async (req, res) => {
    const categorys = await Category.find();
    return res.status(200).json(categorys);
};
