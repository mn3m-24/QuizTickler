import ReviewQuestion from "@/components/review-question";
import useQuizStore from "@/store/use-quiz-store";
import Button from "@/components/ui/button";

const ResultPage = () => {
  const questions = useQuizStore((state) => state.questions);
  const questionsLength = questions.length;
  const answers = useQuizStore((state) => state.answers);
  const correctCount = questions.filter(
    (q, i) => q.correctAnswer === answers[i]
  ).length;
  const restart = useQuizStore((state) => state.restart);

  return (
    <div className="flex-1 flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-7xl">Quiz Completed</h1>
        <h4>Here's how you performed</h4>
      </div>
      <div>{((correctCount / questionsLength) * 100).toFixed(2)}% Accuracy</div>
      <div className="flex flex-col overflow-y-auto max-h-150 max-w-250 gap-6">
        <div className="flex justify-between">
          <h3>Question Review</h3>
          <h3>
            {correctCount} Correct / {questionsLength} Total
          </h3>
        </div>
        <div>
          {questions.map((q, i) => (
            <ReviewQuestion key={i} question={q} userAnswer={answers[i]} />
          ))}
        </div>
      </div>
      <Button variant="primary" onClick={restart}>
        restart
      </Button>
    </div>
  );
};

export default ResultPage;
