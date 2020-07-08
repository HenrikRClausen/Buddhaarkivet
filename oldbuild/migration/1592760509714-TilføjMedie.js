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
class TilføjMedie1592760509714 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE medie (
                Id INT PRIMARY KEY AUTO_INCREMENT, 
                OptagelseId INT,
                Længde INT,
                Hemmeligt TINYINT,
                Politisk TINYINT,
                Placering TINYTEXT,
                CONSTRAINT FK_Medie_Optagelse FOREIGN KEY (OptagelseId) REFERENCES optagelse(Id)
                )`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("DROP TABLE medie");
        });
    }
}
exports.TilføjMedie1592760509714 = TilføjMedie1592760509714;
//# sourceMappingURL=1592760509714-TilføjMedie.js.map