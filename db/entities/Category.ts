import { BaseEntity, Column, Entity, OneToMany,ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.js"
@Entity("category")
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 255 })
    name: string

    @ManyToMany(() => Product, (product) => product.categories)
  products: Product[];

}