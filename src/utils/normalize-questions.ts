import type { APIQuestion, Question } from '@/types';
import decodeHtml from './decode-html';

export const normalizeQuestions = (questions: APIQuestion[]): Question[] => {
  return questions.map(
    (q) =>
      ({
        type: decodeHtml(q.type),
        difficulty: decodeHtml(q.difficulty),
        category: decodeHtml(q.category),
        question: decodeHtml(q.question),
        correct_answer: decodeHtml(q.correct_answer),
        answers: shuffleArr([q.correct_answer, ...q.incorrect_answers]),
      }) as Question
  );
};

const shuffleArr = (answers: Array<string>): string[] => {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // (i+1) because Math.random() returns [0, 1)
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
  return answers;
};
