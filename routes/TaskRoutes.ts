import express from "express";
import { createUser } from "../controllers/UserControllers";
import { createTask } from "../controllers/TasksController";
import { Task } from "../types";
const taskRouter = express.Router();

taskRouter.post("/create", async (req, res) => {
  const body = req.body as unknown as Task;
  console.log(body);
  const task = await createTask({ task: body });

  res.send(task);
});

export default taskRouter;
