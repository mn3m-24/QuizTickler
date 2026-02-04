import useQuizStore from "@/store/use-quiz-store";

interface QuizPaginationProps {
  onOpenSubmit: () => void;
}

const QuizPagination = ({ onOpenSubmit }: QuizPaginationProps) => {
  const questionsLength = useQuizStore((state) => state.questions.length);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const jumpToQuestion = useQuizStore((state) => state.jumpToQuestion);
  const isLastQuestion = currentQuestionIndex === questionsLength - 1;
  return (
    <>
      <button
        disabled={currentQuestionIndex === 0}
        onClick={() => jumpToQuestion(currentQuestionIndex - 1)}
      >
        Previous
      </button>
      <button
        onClick={
          isLastQuestion
            ? onOpenSubmit
            : () => jumpToQuestion(currentQuestionIndex + 1)
        }
      >
        {isLastQuestion ? "Submit" : "Next"}
      </button>
    </>
  );
};

export default QuizPagination;
