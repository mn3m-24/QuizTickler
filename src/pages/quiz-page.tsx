import { useCallback, useState, type ChangeEvent } from 'react';
import QuizTimer from '@/components/quiz-timer';
import useQuiz from '@/hooks/use-quiz-context';
import QuestionCard from '@/components/question-card';
import QuizNavigation from '@/components/quiz-navigation';
import SubmitModal from '@/components/submit-modal';

const QuizPage = () => {
  const {
    state: { questions, currentQuestionIndex, answers, endTime },
    dispatch,
  } = useQuiz();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmitClick = () => {
    setIsModalOpen(true);
  };
  // using callback because handleConfirmSubmit function is passed as a prop, so its reference change on each QuizPage re-render because it is used in an useEffect
  const handleConfirmSubmit = useCallback(() => {
    dispatch({
      type: 'SUBMIT',
    });
    setIsModalOpen(false); // close modal after submitting
  }, [dispatch]);

  const handleJump = useCallback(
    (questionIdx: number) => {
      dispatch({
        type: 'JUMP_TO_QUESTION',
        payload: { questionIdx },
      });
    },
    [dispatch]
  );

  const handleAnswer = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: 'ANSWER_QUESTION',
        payload: {
          answer: e.target.value,
          questionIdx: currentQuestionIndex,
        },
      });
    },
    [dispatch, currentQuestionIndex]
  );

  const currQuestion = questions[currentQuestionIndex];
  const currAns = answers[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  return (
    <main>
      {endTime && <QuizTimer endTime={endTime} onEnd={handleConfirmSubmit} />}
      <QuizNavigation
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        onJump={handleJump}
      />
      <div>
        <QuestionCard
          question={currQuestion}
          answer={currAns}
          onAnswer={handleAnswer}
        />
        <button
          disabled={isFirstQuestion}
          onClick={() => handleJump(currentQuestionIndex - 1)}
        >
          Previous
        </button>
        <button
          onClick={
            isLastQuestion
              ? handleSubmitClick
              : () => handleJump(currentQuestionIndex + 1)
          }
        >
          {isLastQuestion ? 'Submit' : 'Next'}
        </button>
        <SubmitModal
          isOpen={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onConfirm={handleConfirmSubmit}
          unansweredCount={questions.length - Object.keys(answers).length}
        />
      </div>
    </main>
  );
};

export default QuizPage;
