import express from "express";
import {
  addContent,
  deleteDiary,
  getDiary,
} from "../controllers/DiaryController";
import { Diary } from "../types";

export const diaryRouter = express.Router();

diaryRouter.get("/get/:email", async (req, res) => {
  const key = req.params.email;
  const diary = await getDiary(key);
  console.log(diary);
  res.send(diary);
});

diaryRouter.post("/add", async (req, res) => {
  const body = req.body as Diary;
  const key = body.key;
  const addData = addContent({ key: key, diaryEntry: body });
  res.send(addData);
});

diaryRouter.delete("/delete/:email", async (req, res) => {
  const key = req.params.email;
  await deleteDiary(key);
  return true;
});
