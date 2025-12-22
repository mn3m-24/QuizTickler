import type { QuizState } from '@/types';

export const setItem = (key: string, state: QuizState) => {
  try {
    if (state.questions.length === 0) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(state));
  } catch (err) {
    console.error(err);
  }
};

export const getItem = (key: string): QuizState | undefined => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (err) {
    console.error(err);
  }
};
