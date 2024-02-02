import { habitsDb, tasksDb } from "../db";
import { Habit, Task } from "../types";

export const createTask = async ({ task }: { task: Task }) => {
  const taskCreated = await tasksDb.put({ ...task });
  console.log(taskCreated);
  return taskCreated;
};
export const editTask = async ({ task }: { task: Partial<Task> }) => {
  const key = task.key || "";
  delete task.key;
  const taskCreated = await tasksDb.update({ ...task }, key);
  return taskCreated;
};

export const deleteTask = async ({ key }: { key: string }) => {
  await tasksDb.delete(key);
  return true;
};

export const markComplete = async ({ task }: { task: Task }) => {
  if (task.type === "habit") {
    await habitsDb.update(
      {
        lastCompleted: new Date().toLocaleString(),
        streak: habitsDb.util.increment(),
      },
      task.key
    );
  } else {
    await tasksDb.update({ completed: true }, task.key);
  }

  return true;
};

export const getTasks = async (email: string) => {
  const dailyTasks = (await tasksDb.fetch({ email: email }))
    .items as unknown as Task[];
  const habits = (await habitsDb.fetch({ email: email }))
    .items as unknown as Habit[];

  habits.forEach((habit) => {
    dailyTasks.push({
      key: habit.key,
      completed:
        new Date(habit.lastCompleted).toLocaleString().split(",")[0] ===
        new Date().toLocaleString().split(",")[0],
      duration: habit.duration,
      name: habit.name,
      email: habit.email,
      priority: "important",
      urgency: "not urgent",
      type: "habit",
    });
  });

  return dailyTasks;
};
