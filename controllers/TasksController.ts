import { tasksDb } from "../db";
import { Task } from "../types";

export const createTask = async ({ task }: { task: Task }) => {
  const taskCreated = await tasksDb.put({ ...task });
  return taskCreated;
};
export const editTask = async ({ key, task }: { key: string; task: Task }) => {
  const taskCreated = await tasksDb.update({ ...task }, key);
  return taskCreated;
};

export const deleteTask = async ({ key }: { key: string }) => {
  await tasksDb.delete(key);
  return true;
};
