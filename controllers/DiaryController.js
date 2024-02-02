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
exports.addContent = exports.createDiary = void 0;
const db_1 = require("../db");
const createDiary = (diaryEntry) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield db_1.diaryDb.put(Object.assign({}, diaryEntry));
    return data;
});
exports.createDiary = createDiary;
const addContent = ({ key, diaryEntry, }) => __awaiter(void 0, void 0, void 0, function* () {
    const exist = yield db_1.diaryDb.get(key);
    if (!exist) {
        const data = yield (0, exports.createDiary)(diaryEntry);
        return data;
    }
    //   const data = { data: diaryEntry.date, date: diaryEntry };
    //   const dataAdd = await diaryDb.update({});
});
exports.addContent = addContent;
