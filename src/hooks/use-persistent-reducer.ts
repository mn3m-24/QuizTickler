import { useReducer, useEffect } from 'react';
import { setItem, getItem } from '@/utils/local-storage';
import type { QuizActions, QuizState } from '@/types';

const usePersistentReducer = (
  key: string,
  reducer: (state: QuizState, action: QuizActions) => QuizState,
  initialState: QuizState
) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const item = getItem(key);
    return item || initial;
  });
  // sync localStorage with state on change
  useEffect(() => {
    setItem(key, state);
  }, [key, state]);

  return [state, dispatch] as const;
};

export default usePersistentReducer;
