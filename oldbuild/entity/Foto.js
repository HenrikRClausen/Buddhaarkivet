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
const Dag_1 = require("./Dag");
const Sted_1 = require("./Sted");
let Foto = class Foto {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Foto.prototype, "Id", void 0);
__decorate([
    typeorm_1.ManyToOne((_) => Sted_1.Sted, (inverseSide) => inverseSide.Id),
    __metadata("design:type", Sted_1.Sted)
], Foto.prototype, "Sted", void 0);
__decorate([
    typeorm_1.ManyToOne((_) => Dag_1.Dag, (inverseSide) => inverseSide.Id),
    __metadata("design:type", Dag_1.Dag)
], Foto.prototype, "Dag", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Foto.prototype, "Dato", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Foto.prototype, "Farve", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Foto.prototype, "H\u00F8jde", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Foto.prototype, "Bredde", void 0);
Foto = __decorate([
    typeorm_1.Entity()
], Foto);
exports.Foto = Foto;
//# sourceMappingURL=Foto.js.map