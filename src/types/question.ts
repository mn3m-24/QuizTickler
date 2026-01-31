export type QuestionDifficulty = 'easy' | 'medium' | 'hard' | 'any';
export type QuestionType = 'multiple' | 'boolean' | 'any';

export type UserAnswers = { [questionIndex: number]: string };

export type Question = {
  difficulty: QuestionDifficulty;
  category: string;
  question: string;
  correctAnswer: string;
  options: string[];
};
