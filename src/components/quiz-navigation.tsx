import useQuizStore from "@/store/use-quiz-store";
import cn from "../utils/cn";
import Button from "./ui/button";

const QuizNavigation = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const answers = useQuizStore((state) => state.answers)
  const jumpToQuestion = useQuizStore((state) => state.jumpToQuestion);
  return (
    <div className="grid grid-cols-5 gap-2 sm:grid-cols-8 md:grid-cols-10">
      {questions.map((_q, i) => (
        <Button
          variant="secondary"
          size="sm"
          className={cn(
            "aspect-square", // square buttons look
            Object.hasOwn(answers, i) && "bg-zinc-500/50",
            i === currentQuestionIndex && "bg-primary text-primary-foreground"
          )}
          key={i}
          onClick={() => jumpToQuestion(i)}
        >
          {i + 1}
        </Button>
      ))}
    </div>
  );
};

export default QuizNavigation;
