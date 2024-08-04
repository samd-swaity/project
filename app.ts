import { Request, Response } from "express";
import express from 'express';
import env from "dotenv";
import categoryRoute from "./routes/category.js"
import shopRoute from "./routes/shop.js"
import productRoute from "./routes/product.js"
import dataSource from "./db/dbConfig.js";
import { customErrorHandler, DefaultErrorHandler } from "./middleware/errorHandler.js";
import { Product } from "./db/entities/Product.js";

const app = express();
env.config();
const PORT = process.env.PORT || 5000;
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
})

app.use("/categorys", categoryRoute);
app.use("/shops", shopRoute);
app.use("/products", productRoute)

app.use(customErrorHandler)

app.use(DefaultErrorHandler)

dataSource.initialize().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.error('Failed to connect to DB: ' + err);
});

app.listen(PORT, () => {
    console.log(`server is running on host: http://localhost:${PORT}`);
});

export default app;