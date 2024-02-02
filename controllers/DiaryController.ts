import { diaryDb } from "../db";
import { Diary, DiaryEntry } from "../types";

export const createDiary = async (diaryEntry: Diary) => {
  const data = await diaryDb.put({ ...diaryEntry });
  return data;
};

export const addContent = async ({
  key,
  diaryEntry,
}: {
  key: string;
  diaryEntry: Diary;
}) => {
  const exist = await diaryDb.get(key);
  if (!exist) {
    const data = await createDiary(diaryEntry);
    return data;
  }

  //   const data = { data: diaryEntry.date, date: diaryEntry };
  //   const dataAdd = await diaryDb.update({});
};
