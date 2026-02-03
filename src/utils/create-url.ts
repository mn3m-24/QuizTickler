import type { QuizSettings } from "@/types/quiz";

const createUrl = (urlStr: string, settings: QuizSettings) => {
  const url = new URL(urlStr);
  const params = new URLSearchParams();

  for (const [key, val] of Object.entries(settings)) {
    if (val !== null) params.set(key, val.toString());
  }
  url.search = params.toString();
  return url.toString();
};

export default createUrl;
