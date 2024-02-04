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
exports.diaryRouter = void 0;
const express_1 = __importDefault(require("express"));
const DiaryController_1 = require("../controllers/DiaryController");
exports.diaryRouter = express_1.default.Router();
exports.diaryRouter.get("/get/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const key = req.params.email;
    const diary = yield (0, DiaryController_1.getDiary)(key);
    console.log(diary);
    res.send(diary);
}));
exports.diaryRouter.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const key = body.key;
    const addData = (0, DiaryController_1.addContent)({ key: key, diaryEntry: body });
    res.send(addData);
}));
exports.diaryRouter.delete("/delete/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const key = req.params.email;
    yield (0, DiaryController_1.deleteDiary)(key);
    return true;
}));
