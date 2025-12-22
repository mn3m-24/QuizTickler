import { useMemo } from 'react';
import ReviewQuestions from '@/components/review-questions';
import useQuiz from '@/hooks/use-quiz-context';

const ResultPage = () => {
  const {
    state: { questions, answers },
    dispatch,
  } = useQuiz();

  const correctCnt = useMemo(() => {
    return questions.filter((q, i) => q.correct_answer === answers[i]).length;
  }, [questions, answers]);

  return (
    <div>
      <div>
        <h1>Quiz Completed!</h1>
        <p>Here's how you performed</p>
      </div>

      <div>
        <span>{((correctCnt / questions.length) * 100).toFixed(2)}%</span>{' '}
        <span>
          {correctCnt} / {questions.length}
        </span>
      </div>
      <ReviewQuestions questions={questions} userAnswers={answers} />
      <button onClick={() => dispatch({ type: 'RESTART' })}>restart</button>
    </div>
  );
};

export default ResultPage;
