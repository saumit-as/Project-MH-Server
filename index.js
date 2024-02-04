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
const DiaryRoutes_1 = require("./routes/DiaryRoutes");
const socket_io_1 = require("socket.io");
const node_http_1 = require("node:http");
const app = (0, express_1.default)();
const server = (0, node_http_1.createServer)(app);
const io = new socket_io_1.Server(server);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = process.env.PORT || 3000;
io.on("connection", (socket) => {
    console.log("a user connected");
});
server.listen(port, () => {
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
app.use("/diary", DiaryRoutes_1.diaryRouter);
