import { useCallback, useEffect, useState } from 'react';
import useQuiz from '@/hooks/use-quiz-context';
import type { QuizSettings } from '@/types';
import { useQuestions } from '@/api/use-questions';
import { QuizForm } from '@/components/quiz-form';

const StartPage = () => {
  const [settings, setSettings] = useState<QuizSettings>({
    type: 'any',
    difficulty: 'any',
    category: 'any',
    amount: 10,
  });
  const [isReady, setIsReady] = useState<boolean>(false);

  const { dispatch } = useQuiz();
  const { questions, isLoading, isError } = useQuestions(settings, isReady);

  useEffect(() => {
    if (isError) {
      setIsReady(false); // Reset switch so we can click again
      alert('Failed to fetch questions. Please try again.'); // Simple feedback
    }
  }, [isError]);

  useEffect(() => {
    if (questions && questions.length > 0) {
      dispatch({ type: 'START', payload: { questions } });
    }
  }, [questions, dispatch]);

  const handleStart = useCallback(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="start-page" style={{ display: 'flex', gap: '10px' }}>
      <QuizForm
        settings={settings}
        onSettingsChange={setSettings}
        onStart={handleStart}
        isLoading={isLoading}
      />
    </div>
  );
};
export default StartPage;
