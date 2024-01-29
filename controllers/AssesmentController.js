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
exports.analyseResult = exports.getAddictionQuestions = exports.getDepressionQuestions = exports.getAnxietyQuestions = void 0;
const db_1 = require("../db");
const getAnxietyQuestions = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield db_1.questionsDb.get("anxiety");
    return data;
});
exports.getAnxietyQuestions = getAnxietyQuestions;
const getDepressionQuestions = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield db_1.questionsDb.get("depression");
    return data;
});
exports.getDepressionQuestions = getDepressionQuestions;
const getAddictionQuestions = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield db_1.questionsDb.get("gamingAddiction");
    return data;
});
exports.getAddictionQuestions = getAddictionQuestions;
const analyseResult = (answers) => __awaiter(void 0, void 0, void 0, function* () {
    const totalSum = answers.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
    if (totalSum > 25)
        return true;
    return false;
});
exports.analyseResult = analyseResult;
