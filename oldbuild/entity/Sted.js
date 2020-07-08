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
let Sted = class Sted {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Sted.prototype, "Id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Sted.prototype, "Navn", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Sted.prototype, "Lokation", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Sted.prototype, "Land", void 0);
Sted = __decorate([
    typeorm_1.Entity()
], Sted);
exports.Sted = Sted;
//# sourceMappingURL=Sted.js.map