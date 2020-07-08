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
var typeorm_1 = require("typeorm");
var Sted_1 = require("./Sted");
var Begivenhed = /** @class */ (function () {
    function Begivenhed() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Begivenhed.prototype, "Id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Begivenhed.prototype, "Navn", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Sted_1.Sted)
    ], Begivenhed.prototype, "Sted", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Begivenhed.prototype, "StartDato", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Begivenhed.prototype, "SlutDato", void 0);
    Begivenhed = __decorate([
        typeorm_1.Entity()
    ], Begivenhed);
    return Begivenhed;
}());
exports.Begivenhed = Begivenhed;
//# sourceMappingURL=Begivenhed.js.map