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
exports.endHabbit = exports.editHabbit = exports.createHabbit = void 0;
const db_1 = require("../db");
const createHabbit = (habit) => __awaiter(void 0, void 0, void 0, function* () {
    const habitCreated = yield db_1.habitsDb.put(Object.assign({}, habit));
    return habitCreated;
});
exports.createHabbit = createHabbit;
const editHabbit = (habit) => __awaiter(void 0, void 0, void 0, function* () {
    const key = habit.key || "";
    delete habit.key;
    const update = yield db_1.habitsDb.update(Object.assign({}, habit), key);
    return update;
});
exports.editHabbit = editHabbit;
const endHabbit = (key) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.habitsDb.delete(key);
    return true;
});
exports.endHabbit = endHabbit;
