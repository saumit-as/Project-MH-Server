import { Deta } from "deta";

const deta = Deta();

export const userDb = deta.Base("users");
export const profileDb = deta.Base("profiles");
export const questionsDb = deta.Base("questions");
export const habitsDb = deta.Base("habits");
export const tasksDb = deta.Base("tasks");
export const diaryDb = deta.Base("diary");
