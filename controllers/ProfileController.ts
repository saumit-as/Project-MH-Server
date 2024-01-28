import { profileDb } from "../db";
import { Profile } from "../types";

export const createProfile = async (email: string) => {
  try {
    const profileData: Profile = {
      key: email,
      assesmentCompleted: false,
      suggestedAreas: "None",
      areaOfImprovement: "None",
    };
    await profileDb.put({ ...profileData });
    return true;
  } catch (error) {
    throw error;
  }
};
