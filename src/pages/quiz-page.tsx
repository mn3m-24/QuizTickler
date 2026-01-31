import { useCallback, useState } from "react";
import QuizTimer from "@/components/quiz-timer";
import useQuizStore from "@/store/use-quiz-store";
import QuestionCard from "@/components/question-card";
import QuizNavigation from "@/components/quiz-navigation";
import SubmitModal from "@/components/submit-modal";

const QuizPage = () => {
  const questionsLength = useQuizStore((state) => state.questions.length);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const hasTimerStarted = useQuizStore((state) => !!state.endTime);

  const submit = useQuizStore((state) => state.submit);
  const jumpToQuestion = useQuizStore((state) => state.jumpToQuestion);

  const [isModalOpen, setIsModalOpen] = useState(false);
  // using callback because handleConfirmSubmit function is passed as a prop, so its reference change on each QuizPage re-render because it is used in an useEffect
  const handleConfirmSubmit = useCallback(() => {
    submit();
    setIsModalOpen(false); // close modal after submitting
  }, [submit]);

  const isLastQuestion = currentQuestionIndex === questionsLength - 1;

  return (
    <main>
      {hasTimerStarted && <QuizTimer onEnd={handleConfirmSubmit} />}
      <QuizNavigation />
      <div>
        <QuestionCard />
        <button
          disabled={currentQuestionIndex === 0}
          onClick={() => jumpToQuestion(currentQuestionIndex - 1)}
        >
          Previous
        </button>
        <button
          onClick={
            isLastQuestion
              ? () => setIsModalOpen(true)
              : () => jumpToQuestion(currentQuestionIndex + 1)
          }
        >
          {isLastQuestion ? "Submit" : "Next"}
        </button>
        <SubmitModal
          isOpen={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onConfirm={handleConfirmSubmit}
        />
      </div>
    </main>
  );
};

export default QuizPage;
