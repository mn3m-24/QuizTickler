export type Difficulty = 'easy' | 'medium' | 'hard' | 'any';
export type Qtype = 'multiple' | 'boolean' | 'any';

export type APIQuestion = {
  type: Qtype;
  difficulty: Difficulty;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export const ResponseCode = {
  Success: 0,
  NoResults: 1,
  InvalidParameter: 2,
  TokenNotFound: 3,
  TokenEmpty: 4,
  RateLimit: 5,
} as const;

export type ResponseCode = (typeof ResponseCode)[keyof typeof ResponseCode];

export type APIResponse = {
  response_code: ResponseCode;
  results: APIQuestion[];
};

export type Question = Omit<APIQuestion, 'incorrect_answers'> & {
  answers: string[];
};

export type QuizSettings = {
  type: Qtype;
  difficulty: Difficulty;
  category: string;
  amount: number;
};

export type QuizState = {
  questions: Question[];
  answers: Record<number, string>; // { questionIdx: "answer" }
  currentQuestionIndex: number;
  endTime: number | null; // Timestamp for persistence, null when (quiz ends | hasn't started)
};

export type QuizActions =
  | { type: 'START'; payload: { questions: Question[] } }
  | {
      type: 'ANSWER_QUESTION';
      payload: { questionIdx: number; answer: string };
    }
  | { type: 'JUMP_TO_QUESTION'; payload: { questionIdx: number } }
  | { type: 'SUBMIT' } // end the quiz
  | { type: 'RESTART' };
