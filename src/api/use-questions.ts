import useSWR from 'swr';
import type { APIQuestion, Question, QuizSettings } from '@/types';

const fetcher = async (url: string): Promise<Question[]> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (data.response_code !== 0) {
    throw new Error(`API Error with response code: ${data.response_code}`);
  }
  return normalizeQuestions(data.results);
};

const normalizeQuestions = (questions: APIQuestion[]): Question[] => {
  return questions.map((q) => ({
    type: q.type,
    difficulty: q.difficulty,
    category: q.category,
    question: q.question,
    correct_answer: q.correct_answer,
    answers: shuffleArr([q.correct_answer, ...q.incorrect_answers]),
  }));
};

const shuffleArr = (answers: Array<string>): string[] => {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // (i+1) because Math.random() returns [0, 1)
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
  return answers;
};

export const useQuestions = (
  { type, difficulty, category, amount }: QuizSettings,
  enabled: boolean
) => {
  const key = enabled
    ? (() => {
        const url = new URL('https://opentdb.com/api.php');
        const params = new URLSearchParams();
        params.set('amount', amount.toString());
        if (type !== 'any') params.set('type', type);
        if (difficulty !== 'any') params.set('difficulty', difficulty);
        if (category !== 'any') params.set('category', category);
        url.search = params.toString();
        return url.toString();
      })()
    : null;

  const { data, isLoading, error } = useSWR<Question[]>(key, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });
  return {
    questions: data,
    isLoading,
    isError: error,
  };
};
