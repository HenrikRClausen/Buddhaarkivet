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
const Session_1 = require("./Session");
let Optagelse = class Optagelse {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Optagelse.prototype, "Id", void 0);
__decorate([
    typeorm_1.ManyToOne((_) => Session_1.Session, (inverseSide) => inverseSide.Id),
    __metadata("design:type", Session_1.Session)
], Optagelse.prototype, "Session", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Optagelse.prototype, "ErVideo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Optagelse.prototype, "L\u00E6ngde", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Optagelse.prototype, "Formatd", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Optagelse.prototype, "Bitrate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Optagelse.prototype, "H\u00F8jde", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Optagelse.prototype, "Bredde", void 0);
Optagelse = __decorate([
    typeorm_1.Entity()
], Optagelse);
exports.Optagelse = Optagelse;
//# sourceMappingURL=Optagelse.js.map