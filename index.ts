import cors from "cors";
import express, { Request, Response, Application } from "express";
import userRouter from "./routes/UserRoutes";
import { questionsDb } from "./db";
import questionsRouter from "./routes/AssesmentRoutes";

const app: Application = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

// app.get("/createAssesment", async (req, res) => {
//   await questionsDb.put({ test: "jdfhjdh" });
//   return true;
// });
app.use("/user", userRouter);
app.use("/questions", questionsRouter);
