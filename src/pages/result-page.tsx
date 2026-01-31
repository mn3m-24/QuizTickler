import ReviewQuestions from "@/components/review-questions";
import useQuizStore from "@/store/use-quiz-store";

const ResultPage = () => {
  const questionsLength = useQuizStore((state) => state.questions.length);
  const correctCount = useQuizStore(
    (state) =>
      state.questions.filter((q, i) => q.correctAnswer === state.answers[i])
        .length
  );
  const restart = useQuizStore((state) => state.restart);

  return (
    <div>
      <div>
        <h1>Quiz Completed!</h1>
        <p>Here's how you performed</p>
      </div>

      <div>
        <span>{((correctCount / questionsLength) * 100).toFixed(2)}%</span>{" "}
        <span>
          {correctCount} / {questionsLength}
        </span>
      </div>
      <ReviewQuestions />
      <button onClick={restart}>restart</button>
    </div>
  );
};

export default ResultPage;
