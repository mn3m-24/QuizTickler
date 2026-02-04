export type QuestionDifficulty = "easy" | "medium" | "hard";
export type QuestionType = "multiple" | "boolean";

export type UserAnswers = { [questionIndex: number]: string };

export type Question = {
  difficulty: QuestionDifficulty;
  category: string;
  question: string;
  correctAnswer: string;
  options: string[];
};
