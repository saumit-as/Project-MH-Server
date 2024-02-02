import express from "express";
import { createUser } from "../controllers/UserControllers";
import { createTask } from "../controllers/TasksController";
import { Task } from "../types";
import {
  getAddictionQuestions,
  getAnxietyQuestions,
  getDepressionQuestions,
} from "../controllers/AssesmentController";
const questionsRouter = express.Router();

questionsRouter.get("/anxiety", async (req, res) => {
  const questions = await getAnxietyQuestions();

  res.send(questions);
});
questionsRouter.get("/depression", async (req, res) => {
  const questions = await getDepressionQuestions();

  res.send(questions);
});
questionsRouter.get("/gaming-addiction", async (req, res) => {
  const questions = await getAddictionQuestions();

  res.send(questions);
});

export default questionsRouter;
