import QuizTimer from "@/components/quiz-timer";
import useQuizStore from "@/store/use-quiz-store";
import QuestionCard from "@/components/question-card";
import QuizNavigation from "@/components/quiz-navigation";
import SubmitModal from "@/components/submit-modal";
import useQuizFlow from "@/hooks/use-quiz-flow";
import QuizPagination from "@/components/quiz-pagination";
import QuizProgress from "@/components/quiz-progress";

const QuizPage = () => {
  const hasTimerStarted = useQuizStore((state) => !!state.endTime);
  const { isModalOpen, setIsModalOpen, handleSubmit } = useQuizFlow();

  return (
    <main>
      {hasTimerStarted && <QuizTimer onEnd={handleSubmit} />}
      <QuizProgress />
      <QuizNavigation />
      <div>
        <QuestionCard />
        <QuizPagination onOpenSubmit={() => setIsModalOpen(true)} />
        <SubmitModal
          isOpen={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onConfirm={handleSubmit}
        />
      </div>
    </main>
  );
};

export default QuizPage;
