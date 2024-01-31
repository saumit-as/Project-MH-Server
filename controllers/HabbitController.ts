import { habitsDb } from "../db";
import { Habit } from "../types";

export const createHabbit = async (habit: Habit) => {
  const habitCreated = await habitsDb.put({ ...habit });
  return habitCreated;
};

export const editHabbit = async (habit: Partial<Habit>) => {
  const key = habit.key || "";
  delete habit.key;
  const update = await habitsDb.update({ ...habit }, key);
  return update;
};

export const endHabbit = async (key: string) => {
  await habitsDb.delete(key);
  return true;
};
