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
const TasksController_1 = require("../controllers/TasksController");
const taskRouter = express_1.default.Router();
taskRouter.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log(body);
    const task = yield (0, TasksController_1.createTask)({ task: body });
    res.send(task);
}));
taskRouter.get("/get/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    const task = yield (0, TasksController_1.getTasks)(email);
    console.log(task);
    res.send(task);
}));
taskRouter.post("/complete", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log(body);
    const task = yield (0, TasksController_1.markComplete)({ task: body });
    res.send(task);
}));
taskRouter.patch("/edit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log(body);
    const task = yield (0, TasksController_1.editTask)({ task: body });
    res.send(task);
}));
taskRouter.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const key = req.params.id;
    const task = yield (0, TasksController_1.deleteTask)({ key: key });
    res.send(task);
}));
exports.default = taskRouter;
