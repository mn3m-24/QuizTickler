import type { QuizState } from '@/types';

export const setItem = (key: string, value: QuizState) => {
  try {
    if (value.status === 'idle') window.sessionStorage.removeItem(key);
    else window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(err);
  }
};

export const getItem = (key: string): QuizState | undefined => {
  try {
    const item = window.sessionStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (err) {
    console.error(err);
  }
};
