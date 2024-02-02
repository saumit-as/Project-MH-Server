import express from "express";
import { Habit } from "../types";
import { createHabbit } from "../controllers/HabbitController";

export const habitRouter = express.Router();

habitRouter.post("/create", async (req, res) => {
  const body = req.body as unknown as Habit;
  console.log(body);
  const task = await createHabbit(body);

  res.send(task);
});
