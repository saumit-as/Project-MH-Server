import { questionsDb } from "../db";

export const getAnxietyQuestions = async () => {
  const data = await questionsDb.get("anxiety");
  return data;
};
export const getDepressionQuestions = async () => {
  const data = await questionsDb.get("depression");
  return data;
};
export const getAddictionQuestions = async () => {
  const data = await questionsDb.get("addiction");
  return data;
};

export const analyseResult = async (answers: number[]) => {
  const totalSum = answers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  if (totalSum > 25) return true;
  return false;
};
