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
class TilføjSession1592760490314 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE session (
                Id INT PRIMARY KEY AUTO_INCREMENT, 
                Navn VARCHAR(255),
                DagId INT,
                LærerId INT,
                OversætterId INT,
                SprogId INT,
                OversatSprogId INT,
                Starttidspunkt DATETIME,
                CONSTRAINT FK_Session_Dag FOREIGN KEY (DagId) REFERENCES dag(Id),
                CONSTRAINT FK_Session_Lærer FOREIGN KEY (LærerId) REFERENCES lærer(Id),
                CONSTRAINT FK_Session_Sprog FOREIGN KEY (SprogId) REFERENCES sprog(Id),
                CONSTRAINT FK_Session_OversatTil FOREIGN KEY (OversatSprogId) REFERENCES sprog(Id)
                )`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("DROP TABLE session");
        });
    }
}
exports.TilføjSession1592760490314 = TilføjSession1592760490314;
//# sourceMappingURL=1592760490314-TilføjSession.js.map