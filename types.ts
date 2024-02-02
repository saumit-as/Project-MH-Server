export interface User {
  username: string;
  key: string;
  userId: string;
  profileCompleted: boolean;
  //   profileId: string;
}

export interface Profile {
  key: string;
  assesmentCompleted: boolean;
  suggestedAreas: AreaOfImprovements[] | AreaOfImprovements;
  areaOfImprovement: AreaOfImprovements[] | AreaOfImprovements;
}

type AreaOfImprovements = "None" | "Anxiety" | "Depression" | "Addiction";

export interface Habit {
  key: string;
  name: string;
  date: string;
  duration: string;
  streak: number;
  email: string;
  lastCompleted: string;
}

// export interface TaskSet {
//   key: string;
//   email: string;
//   tasks: Tasks[];
// }

export interface Task {
  key: string;
  email: string;
  name: string;
  urgency: "urgent" | "not urgent";
  priority: "important" | "not important";
  duration: string;
  completed: boolean;
  type: "task" | "habit";
}

export interface DiaryEntry {
  date: string;
  contents: string;
}

export interface Diary {
  key: string;
  data: string;
}
