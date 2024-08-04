import { DataSource } from "typeorm";
import { Product } from "./entities/Product.js";
import { Category } from "./entities/Category.js";
import { Shop } from "./entities/Shop.js";


const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "ecommerce-shop2",
    synchronize: true,
    logging: false,
    entities: [Shop,Product,Category]
})

export default dataSource;