var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Shop } from "./Shop.js";
import { Category } from "./Category.js";
let Product = class Product extends BaseEntity {
    id;
    name;
    price;
    shop;
    categories;
};
__decorate([
    PrimaryGeneratedColumn("increment"),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    Column({ length: 255 }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    ManyToOne(() => Shop, shop => shop.products),
    __metadata("design:type", Shop)
], Product.prototype, "shop", void 0);
__decorate([
    ManyToMany(() => Category, category => category.products),
    JoinTable(),
    __metadata("design:type", Array)
], Product.prototype, "categories", void 0);
Product = __decorate([
    Entity("product")
], Product);
export { Product };
