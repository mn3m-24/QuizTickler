import { useCallback } from "react";
import QuizTimer from "@/components/quiz-timer";
import useQuizStore from "@/store/use-quiz-store";
import QuestionCard from "@/components/question-card";
import QuizNavigation from "@/components/quiz-navigation";
import useQuizFlow from "@/hooks/use-quiz-flow";
import QuizPagination from "@/components/quiz-pagination";
import SubmitModal from "@/components/submit-modal";

const QuizPage = () => {
  const hasTimerStarted = useQuizStore((state) => !!state.endTime);
  const { isModalOpen, setIsModalOpen, handleSubmit } = useQuizFlow();
  const handleCloseModal = useCallback(
    () => setIsModalOpen(false),
    [setIsModalOpen]
  );
  return (
    <div className="flex-1 flex flex-col justify-center">
      {hasTimerStarted && <QuizTimer onEnd={handleSubmit} />}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <QuestionCard />
        </div>
        <div className="flex flex-col items-center gap-6">
          <QuizPagination onOpenSubmit={() => setIsModalOpen(true)} />
          <QuizNavigation />
        </div>
      </div>
      <SubmitModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default QuizPage;
