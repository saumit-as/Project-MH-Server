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
    };
    await userDb.put({ ...userData });
    await createProfile(email);
    return true;
  } catch (error) {
    throw error;
  }
};
