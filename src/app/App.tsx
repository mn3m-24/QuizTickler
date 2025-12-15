import useQuiz from '@/hooks/use-quiz-context';
import QuizPage from '@/pages/quiz-page';
import ResultPage from '@/pages/result-page';
import StartPage from '@/pages/start-page';
import QuizProvider from '@/store/quiz-provider';

function QuizContent() {
  const { state } = useQuiz();
  switch (state.status) {
    case 'running':
      return <QuizPage />;
    case 'finished':
      return <ResultPage />;
    case 'idle':
    default:
      return <StartPage />;
  }
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
