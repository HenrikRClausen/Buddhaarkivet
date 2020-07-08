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
class TilføjOptagelse1592760500182 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE optagelse (
                Id INT PRIMARY KEY AUTO_INCREMENT, 
                SessionId INT,
                ErVideo TINYINT,
                Længde INT,
                Format VARCHAR(40),
                Bitrate INT,
                Højde INT,
                Bredde INT,
                CONSTRAINT FK_Optagelse_Session FOREIGN KEY (SessionId) REFERENCES session(Id)
                )`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("DROP TABLE optagelse");
        });
    }
}
exports.TilføjOptagelse1592760500182 = TilføjOptagelse1592760500182;
//# sourceMappingURL=1592760500182-TilføjOptagelse.js.map