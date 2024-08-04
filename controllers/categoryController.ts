import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Category } from "../db/entities/Category.js";
import { validationResult } from "express-validator";

export const createCategory = async (req: Request, res: Response) => {
    const { id, name } = req.body;

    if (!id || !name ) {
        return res.status(400).send({ error: "All fields are required" });
    }

        const category = Category.create({
            id,
            name,
        });

        await category.save();

        return res.status(201).json(category);
};

export const getAllCategories = async (req: Request, res: Response) => {
    const categorys = await Category.find();

    return res.status(200).json(categorys);
};
