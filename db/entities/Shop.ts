import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.js";


@Entity("shop")
export class Shop extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 255 })
    shopName: string

    @Column({ length: 255 })
    email: string

    @Column({ length: 255 })
    password: string

    @OneToMany(() => Product, product => product.shop)
    products: Product[]

}