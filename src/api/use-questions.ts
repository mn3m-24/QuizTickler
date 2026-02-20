import useSWR, { type SWRConfiguration } from "swr";
import fetcher from "@/lib/fetcher";
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
  switch (data.response_code) {
    case 1:
      throw new Error(
        "Could not return results. The API doesn't have enough questions for your query"
      );
    case 2:
      throw new Error(
        "Contains an invalid parameter. Arguements passed in aren't valid."
      );
    case 3:
      throw new Error("Session Token does not exist.");
    case 4:
      throw new Error(
        "Session Token has returned all possible questions for the specified query. Resetting the Token is necessary."
      );
    case 5:
      throw new Error("Too many requests have occurred, wait for 5 seconds.");
    default:
      return normalizeQuestions(data.results);
  }
};

export const useQuestions = (
  settings: QuizSettings,
  enabled: boolean,
  options: SWRConfiguration<Question[]>
) => {
  const key = enabled
    ? createUrl("https://opentdb.com/api.php", settings)
    : null;
  return useSWR<Question[]>(key, getQuestions, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
    ...options,
  });
};
