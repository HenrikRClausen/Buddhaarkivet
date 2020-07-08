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
const L_rer_1 = require("./L\u00E6rer");
const Overs_tter_1 = require("./Overs\u00E6tter");
const Sprog_1 = require("./Sprog");
let Session = class Session {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Session.prototype, "Id", void 0);
__decorate([
    typeorm_1.ManyToOne((_) => Dag_1.Dag, (inverseSide) => inverseSide.Id),
    __metadata("design:type", Dag_1.Dag)
], Session.prototype, "Dag", void 0);
__decorate([
    typeorm_1.ManyToOne((_) => L_rer_1.Lærer, (inverseSide) => inverseSide.Id),
    __metadata("design:type", L_rer_1.Lærer)
], Session.prototype, "L\u00E6rer", void 0);
__decorate([
    typeorm_1.ManyToOne((_) => Overs_tter_1.Oversætter, (inverseSide) => inverseSide.Id),
    __metadata("design:type", Overs_tter_1.Oversætter)
], Session.prototype, "Overs\u00E6tter", void 0);
__decorate([
    typeorm_1.ManyToOne((_) => Sprog_1.Sprog, (inverseSide) => inverseSide.Id),
    __metadata("design:type", Sprog_1.Sprog)
], Session.prototype, "Sprog", void 0);
__decorate([
    typeorm_1.ManyToOne((_) => Sprog_1.Sprog, (inverseSide) => inverseSide.Id),
    __metadata("design:type", Sprog_1.Sprog)
], Session.prototype, "OversatSprog", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Session.prototype, "Starttidspunkt", void 0);
Session = __decorate([
    typeorm_1.Entity()
], Session);
exports.Session = Session;
//# sourceMappingURL=Session.js.map