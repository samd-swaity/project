import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Shop } from "../db/entities/Shop.js";
import { validationResult } from "express-validator";

export const createShop = async (req: Request, res: Response) => {
    const { id, shopName, email, password } = req.body;

    if (!id || !shopName || !email || !password) {
        return res.status(400).send({ error: "All fields are required" });
    }

        const shop = Shop.create({ id, shopName, email, password });
        await Shop.save(shop); 
        return res.status(201).json(shop);
   
};

export const getShopById = async (req: Request, res: Response) => {
    const shopId = parseInt(req.params.id, 10);
    if (isNaN(shopId)) {
        return res.status(400).send({ error: "Invalid shop ID" });
    }
        const shop = await Shop.findOneBy({ id: shopId });
        if (shop) {
            return res.status(200).json(shop);
        } else {
            return res.status(404).send({ error: "Shop not found" });
        }
    
};

export const getAllShops = async (req: Request, res: Response) => {

        const shops = await Shop.find();

        return res.status(200).json(shops);
   
};
