"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Sprog_1 = require("./Sprog");
let Oversætter = class Oversætter {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Oversætter.prototype, "Id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Oversætter.prototype, "Navn", void 0);
__decorate([
    typeorm_1.ManyToOne((_type) => Sprog_1.Sprog, (inverseSide) => inverseSide.Id),
    __metadata("design:type", Sprog_1.Sprog)
], Oversætter.prototype, "Sprog", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Oversætter.prototype, "Land", void 0);
Oversætter = __decorate([
    typeorm_1.Entity()
], Oversætter);
exports.Oversætter = Oversætter;
//# sourceMappingURL=Oversætter.js.map