import { createContext, type Dispatch } from 'react';
import type { QuizState, QuizActions } from '@/types';

const QuizContext = createContext<
  { state: QuizState; dispatch: Dispatch<QuizActions> } | undefined
>(undefined);

export default QuizContext;
