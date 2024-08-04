import { BaseEntity, Column, Entity, OneToMany,JoinTable,ManyToMany,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Shop } from "./Shop.js"
import { Category } from "./Category.js";
@Entity("product")
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 255 })
    name: string

    @Column()
    price: number

    @ManyToOne(() => Shop, shop => shop.products)
    shop: Shop
    @ManyToMany(() => Category, category => category.products)
    @JoinTable()
    categories: Category[];
}