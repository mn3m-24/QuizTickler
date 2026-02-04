import type { QuestionType, QuestionDifficulty } from "./question";

export type QuizStatus = "idle" | "loading" | "active" | "completed";

export interface QuizSettings {
  type: QuestionType | null;
  difficulty: QuestionDifficulty | null;
  category: string | null; // the category id a number but i will receive it in a string
  amount: number;
}
