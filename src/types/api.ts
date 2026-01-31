import type { QuestionType, QuestionDifficulty } from "./question";

export type OpenTDBQuestion = {
  type: QuestionType;
  difficulty: QuestionDifficulty;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export interface OpenTDBResponse {
  response_code: ResponseCode;
  results: OpenTDBQuestion[];
}

export const responseCode = {
  Success: 0,
  NoResults: 1,
  InvalidParameter: 2,
  TokenNotFound: 3,
  TokenEmpty: 4,
  RateLimit: 5,
} as const;

export type ResponseCode = (typeof responseCode)[keyof typeof responseCode];
