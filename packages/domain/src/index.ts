export type Subject = "Math" | "Science" | "Reading" | "History" | "Language" | "General";

export interface Assignment {
  id: string;
  subject: Subject;
  title: string;
  difficulty: number;
}

export interface PlayerProgress {
  userId: string;
  points: number;
  streak: number;
  mastery: number;
}
