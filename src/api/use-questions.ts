import useSWR, { type SWRConfiguration } from 'swr';
import { fetcher } from '@/lib/fetcher';
import type { APIQuestion, Question, QuizSettings } from '@/types';
import { normalizeQuestions } from '@/utils/normalize-questions';

type APIResponse = {
  response_code: number;
  results: APIQuestion[];
};

const getQuestions = async (url: string): Promise<Question[]> => {
  const data = await fetcher<APIResponse>(url);
  if (data.response_code !== 0) {
    throw new Error(`API Error with response code: ${data.response_code}`);
  }
  return normalizeQuestions(data.results);
};

const createUrl = ({ type, amount, difficulty, category }: QuizSettings) => {
  const url = new URL('https://opentdb.com/api.php');
  const params = new URLSearchParams();
  params.set('amount', amount.toString());
  if (type !== 'any') params.set('type', type);
  if (difficulty !== 'any') params.set('difficulty', difficulty);
  if (category !== 'any') params.set('category', category);
  url.search = params.toString();
  return url.toString();
};

export const useQuestions = (
  settings: QuizSettings,
  enabled: boolean,
  options: SWRConfiguration<Question[]>
) => {
  const key = enabled ? createUrl(settings) : null;

  return useSWR<Question[]>(key, getQuestions, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
    ...options,
  });
};
