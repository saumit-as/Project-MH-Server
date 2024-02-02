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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AssesmentController_1 = require("../controllers/AssesmentController");
const questionsRouter = express_1.default.Router();
questionsRouter.get("/anxiety", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const questions = yield (0, AssesmentController_1.getAnxietyQuestions)();
    res.send(questions);
}));
questionsRouter.get("/depression", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const questions = yield (0, AssesmentController_1.getDepressionQuestions)();
    res.send(questions);
}));
questionsRouter.get("/gaming-addiction", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const questions = yield (0, AssesmentController_1.getAddictionQuestions)();
    res.send(questions);
}));
exports.default = questionsRouter;
