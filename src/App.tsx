import useQuiz from '@/hooks/use-quiz-context';
import QuizPage from '@/pages/quiz-page';
import ResultPage from '@/pages/result-page';
import StartPage from '@/pages/start-page';
import QuizProvider from '@/store/quiz-provider';

function QuizContent() {
  const {
    state: { questions, endTime },
  } = useQuiz();

  if (questions.length === 0) return <StartPage />; // No questions -> starting page
  if (endTime !== null) return <QuizPage />; // questions & endTime -> quiz page
  return <ResultPage />; // questions & no endTime -> result page
}

function App() {
  return (
    <>
      <QuizProvider>
        <QuizContent />
      </QuizProvider>
    </>
  );
}

export default App;
