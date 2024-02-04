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

  const dataAdd = diaryDb.update({ data: diaryEntry.data }, key);
  return dataAdd;

  //   const data = { data: diaryEntry.date, date: diaryEntry };
  //   const dataAdd = await diaryDb.update({});
};

export const getDiary = async (key: string) => {
  const diary = await diaryDb.get(key);
  if (!diary) {
    const data = await createDiary({ data: "", key: key });
    return data;
  }
  return diary;
};

export const deleteDiary = async (key: string) => {
  const deletes = await diaryDb.delete(key);
  return deletes;
};
