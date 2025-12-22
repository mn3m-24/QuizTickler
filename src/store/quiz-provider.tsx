import { type ReactNode } from 'react';
import { quizReducer, initialState } from './quiz-reducer';
import QuizContext from './quiz-context';
import usePersistentReducer from '@/hooks/use-persistent-reducer';

const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = usePersistentReducer(
    'quizStore',
    quizReducer,
    initialState
  );

  return <QuizContext value={{ state, dispatch }}>{children}</QuizContext>;
};

export default QuizProvider;
