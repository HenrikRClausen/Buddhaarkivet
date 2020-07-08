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
class TilføjFoto1592760517187 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE foto (
                Id INT PRIMARY KEY AUTO_INCREMENT, 
                Navn VARCHAR(80),
                DagId INT,
                StedId INT,
                Dato DATETIME,
                Farve TINYINT,
                Højde INT,
                Bredde INT,
                CONSTRAINT FK_Foto_Dag FOREIGN KEY (DagId) REFERENCES dag(Id),
                CONSTRAINT FK_Foto_Sted FOREIGN KEY (StedId) REFERENCES sted(Id)
                )`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("DROP TABLE foto");
        });
    }
}
exports.TilføjFoto1592760517187 = TilføjFoto1592760517187;
//# sourceMappingURL=1592760517187-TilføjFoto.js.map