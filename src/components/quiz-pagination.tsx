import useQuizStore from "@/store/use-quiz-store";
import Button from "./ui/button";

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
    <div className="flex justify-between w-full">
      <Button
        variant="secondary"
        disabled={currentQuestionIndex === 0}
        onClick={() => jumpToQuestion(currentQuestionIndex - 1)}
      >
        Previous
      </Button>
      <Button
        variant="primary"
        size="sm"
        onClick={
          isLastQuestion
            ? onOpenSubmit
            : () => jumpToQuestion(currentQuestionIndex + 1)
        }
      >
        {isLastQuestion ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

export default QuizPagination;
