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
exports.getTasks = exports.markComplete = exports.deleteTask = exports.editTask = exports.createTask = void 0;
const db_1 = require("../db");
const createTask = ({ task }) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("saumit", task);
    const taskCreated = yield db_1.tasksDb.put(Object.assign({}, task));
    console.log(taskCreated);
    return taskCreated;
});
exports.createTask = createTask;
const editTask = ({ task }) => __awaiter(void 0, void 0, void 0, function* () {
    const key = task.key || "";
    delete task.key;
    const taskCreated = yield db_1.tasksDb.update(Object.assign({}, task), key);
    return taskCreated;
});
exports.editTask = editTask;
const deleteTask = ({ key }) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.tasksDb.delete(key);
    return true;
});
exports.deleteTask = deleteTask;
const markComplete = ({ task }) => __awaiter(void 0, void 0, void 0, function* () {
    if (task.type === "habit") {
        yield db_1.habitsDb.update({
            lastCompleted: new Date().toLocaleString(),
            streak: db_1.habitsDb.util.increment(),
        }, task.key);
    }
    else {
        yield db_1.tasksDb.update({ completed: true }, task.key);
    }
    return true;
});
exports.markComplete = markComplete;
const getTasks = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const dailyTasks = (yield db_1.tasksDb.fetch({ email: email }))
        .items;
    const habits = (yield db_1.habitsDb.fetch({ email: email }))
        .items;
    habits.forEach((habit) => {
        dailyTasks.push({
            key: habit.key,
            completed: new Date(habit.lastCompleted).toLocaleString().split(",")[0] ===
                new Date().toLocaleString().split(",")[0],
            duration: habit.duration,
            name: habit.name,
            email: habit.email,
            priority: "important",
            urgency: "not urgent",
            type: "habit",
        });
    });
    return dailyTasks;
});
exports.getTasks = getTasks;
