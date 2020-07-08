"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class TilføjBegivenhed1592740929050 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE begivenhed (
                Id INT PRIMARY KEY AUTO_INCREMENT, 
                Navn varchar(80), 
                StedId INT, 
                StartDato DATETIME, 
                SlutDato DATETIME,
                CONSTRAINT FK_Begivenhed_Sted FOREIGN KEY (StedId) REFERENCES sted(Id)
                )`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("DROP TABLE begivenhed");
        });
    }
}
exports.TilføjBegivenhed1592740929050 = TilføjBegivenhed1592740929050;
//# sourceMappingURL=1592740929050-TilføjBegivenhed.js.map