import express from "express";
import { createUser } from "../controllers/UserControllers";
import {
  createTask,
  deleteTask,
  editTask,
  getTasks,
  markComplete,
} from "../controllers/TasksController";
import { Task } from "../types";
const taskRouter = express.Router();

taskRouter.post("/create", async (req, res) => {
  const body = req.body as unknown as Task;
  console.log(body);
  const task = await createTask({ task: body });

  res.send(task);
});
taskRouter.get("/get/:email", async (req, res) => {
  const email = req.params.email;

  const task = await getTasks(email);
  console.log(task);
  res.send(task);
});
taskRouter.post("/complete", async (req, res) => {
  const body = req.body as unknown as Task;
  console.log(body);
  const task = await markComplete({ task: body });

  res.send(task);
});
taskRouter.patch("/edit", async (req, res) => {
  const body = req.body as unknown as Task;
  console.log(body);
  const task = await editTask({ task: body });

  res.send(task);
});
taskRouter.delete("/delete/:id", async (req, res) => {
  const key = req.params.id;
  const task = await deleteTask({ key: key });
  res.send(task);
});

export default taskRouter;
