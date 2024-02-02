"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const AssesmentRoutes_1 = __importDefault(require("./routes/AssesmentRoutes"));
const TaskRoutes_1 = __importDefault(require("./routes/TaskRoutes"));
const HabitRouter_1 = require("./routes/HabitRouter");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});
app.get("/", (req, res) => {
    res.send("Welcome to Express & TypeScript Server");
});
// app.get("/createAssesment", async (req, res) => {
//   await questionsDb.put({ test: "jdfhjdh" });
//   return true;
// });
app.use("/user", UserRoutes_1.default);
app.use("/questions", AssesmentRoutes_1.default);
app.use("/tasks", TaskRoutes_1.default);
app.use("/habits", HabitRouter_1.habitRouter);
