import { useContext } from 'react';
import QuizContext from '@/store/quiz-context';

// wrapper for useContext
const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error('useStore must be used within QuizProvider');

  return context;
};

export default useQuiz;
