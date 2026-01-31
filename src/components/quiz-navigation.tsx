import useQuizStore from "@/store/use-quiz-store";

const QuizNavigation = () => {
  const questions = useQuizStore((state) => state.questions);
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const jumpToQuestion = useQuizStore((state) => state.jumpToQuestion);
  return (
    <div className="quiz-navigation">
      {questions.map((q, i) => (
        <button
          key={i}
          onClick={() => jumpToQuestion(i)}
          style={
            i === currentQuestionIndex
              ? {
                  backgroundColor: "#0056b3",
                  boxShadow: "inset 0 3px 5px rgba(0,0,0,0.3)",
                }
              : {}
          }
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default QuizNavigation;
