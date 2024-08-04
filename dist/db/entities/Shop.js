var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.js";
let Shop = class Shop extends BaseEntity {
    id;
    shopName;
    email;
    password;
    products;
};
__decorate([
    PrimaryGeneratedColumn("increment"),
    __metadata("design:type", Number)
], Shop.prototype, "id", void 0);
__decorate([
    Column({ length: 255 }),
    __metadata("design:type", String)
], Shop.prototype, "shopName", void 0);
__decorate([
    Column({ length: 255 }),
    __metadata("design:type", String)
], Shop.prototype, "email", void 0);
__decorate([
    Column({ length: 255 }),
    __metadata("design:type", String)
], Shop.prototype, "password", void 0);
__decorate([
    OneToMany(() => Product, product => product.shop),
    __metadata("design:type", Array)
], Shop.prototype, "products", void 0);
Shop = __decorate([
    Entity("shop")
], Shop);
export { Shop };
