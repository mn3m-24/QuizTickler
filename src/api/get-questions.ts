import type { QuizConfig, Question, APIQuestion } from '../types/index.ts';
import data from '@/data/questions.json' with { type: 'json' };
const quizzes = data.results as APIQuestion[];

const getQuestions = (filters: QuizConfig): Question[] => {
  // filter based on filters
  let filtered = quizzes.filter((q) => {
    const matchType =
      filters.type === 'any' ||
      q.type.toLowerCase() === filters.type.toLowerCase();
    const matchCategory =
      filters.category === 'any' ||
      q.category.toLowerCase() === filters.category.toLowerCase();
    const matchDifficulty =
      filters.difficulty === 'any' ||
      q.difficulty.toLowerCase() === filters.difficulty.toLowerCase();
    return matchCategory && matchDifficulty && matchType;
  });

  filtered = filtered.sort(() => 0.5 - Math.random()); // schuffle questions
  filtered = filtered.slice(0, filters.amount); // get the wanted number of q

  // normalize questions  & shuffle choices
  const resultQuestions: Question[] = filtered.map(
    ({
      type,
      difficulty,
      category,
      question,
      correct_answer,
      incorrect_answers,
    }) => ({
      type,
      difficulty,
      category,
      question,
      answers: shuffleArr([correct_answer, ...incorrect_answers]),
      correct_answer,
    })
  );
  return resultQuestions;
};

const shuffleArr = (answers: Array<string>): string[] => {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // (i+1) because Math.random() returns [0, 1)
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
  return answers;
};

export default getQuestions;
