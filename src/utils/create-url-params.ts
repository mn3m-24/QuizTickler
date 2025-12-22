import type { QuizSettings } from '@/types';

export const createParams = (urlStr: string, settings: QuizSettings) => {
  const url = new URL(urlStr);
  const params = new URLSearchParams();
  for (const [key, val] of Object.entries(settings)) {
    if (!val) return;
    params.set(key, val.toString());
  }
  url.search = params.toString();
  return url.toString();
};
