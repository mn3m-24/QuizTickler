import useSWR, { type SWRConfiguration } from "swr";
import { fetcher } from "@/lib/fetcher";
import type { OpenTDBQuestion } from "@/types/api";
import type { Question } from "@/types/question";
import type { QuizSettings } from "@/types/quiz";
import { normalizeQuestions } from "@/utils/normalize-questions";
import createUrl from "@/utils/create-url";

type OpenTDBResponse = {
  response_code: number;
  results: OpenTDBQuestion[];
};

const getQuestions = async (url: string): Promise<Question[]> => {
  const data = await fetcher<OpenTDBResponse>(url);
  if (data.response_code !== 0) {
    throw new Error(`API Error with response code: ${data.response_code}`);
  }
  return normalizeQuestions(data.results);
};

export const useQuestions = (
  settings: QuizSettings,
  enabled: boolean,
  options: SWRConfiguration<Question[]>
) => {
  const key = enabled
    ? createUrl("https://opentdb.com/api.php", settings)
    : null;
  console.log("this is the key: ", key);
  return useSWR<Question[]>(key, getQuestions, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
    ...options,
  });
};
