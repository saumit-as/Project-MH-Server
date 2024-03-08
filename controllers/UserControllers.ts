import { userDb } from "../db";
import { User } from "../types";
import { createProfile } from "./ProfileController";

export const createUser = async ({
  email,
  userId,
  username,
}: {
  email: string;
  userId: string;
  username: string;
}) => {
  try {
    const userData: User = {
      key: email,
      username: username,
      userId: userId,
      profileCompleted: false,
      anxiety: 0,
      depression: 0,
      gamingAddiction: 0,
    };
    await userDb.put({ ...userData });
    await createProfile(email);
    return true;
  } catch (error) {
    throw error;
  }
};

export const updateScore = async ({
  email,
  category,
  score,
}: {
  email: string;
  category: string;
  score: number;
}) => {
  await userDb.update({ [category]: score }, email);
};

export const getUser = async (email: string) => {
  return await userDb.get(email);
};
