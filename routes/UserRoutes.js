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
const UserControllers_1 = require("../controllers/UserControllers");
const userRouter = express_1.default.Router();
userRouter.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log(body);
    const user = yield (0, UserControllers_1.createUser)({
        email: body.email,
        userId: body.userId,
        username: body.username,
    });
    res.send(user);
}));
userRouter.post("/setScore", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const update = yield (0, UserControllers_1.updateScore)(Object.assign({}, body));
    res.send(update);
}));
userRouter.get("/get/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    const task = yield (0, UserControllers_1.getUser)(email);
    console.log(task);
    res.send(task);
}));
exports.default = userRouter;
