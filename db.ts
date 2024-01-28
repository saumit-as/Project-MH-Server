import { Deta } from "deta";

const deta = Deta();

export const userDb = deta.Base("users");
export const profileDb = deta.Base("profiles");
export const questionsDb = deta.Base("questions");
export const habits = deta.Base("habits");
export const tasks = deta.Base("tasks");
