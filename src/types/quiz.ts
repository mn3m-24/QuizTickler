import type { QuestionType, QuestionDifficulty } from "./question";

export type QuizStatus = "idle" | "loading" | "active" | "completed";

export interface QuizSettings {
  type: QuestionType;
  difficulty: QuestionDifficulty;
  category: string;
  amount: number;
}
