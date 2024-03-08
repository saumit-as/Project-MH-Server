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
exports.getUser = exports.updateScore = exports.createUser = void 0;
const db_1 = require("../db");
const ProfileController_1 = require("./ProfileController");
const createUser = ({ email, userId, username, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = {
            key: email,
            username: username,
            userId: userId,
            profileCompleted: false,
            anxiety: 0,
            depression: 0,
            gamingAddiction: 0,
        };
        yield db_1.userDb.put(Object.assign({}, userData));
        yield (0, ProfileController_1.createProfile)(email);
        return true;
    }
    catch (error) {
        throw error;
    }
});
exports.createUser = createUser;
const updateScore = ({ email, category, score, }) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.userDb.update({ [category]: score }, email);
});
exports.updateScore = updateScore;
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.userDb.get(email);
});
exports.getUser = getUser;
