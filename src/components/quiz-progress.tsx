import useQuizStore from "@/store/use-quiz-store";
import { useShallow } from "zustand/shallow";

const QuizProgress = () => {
  const { questionsNumber, answersNumber } = useQuizStore(
    useShallow((state) => ({
      questionsNumber: state.questions.length,
      answersNumber: Object.keys(state.answers).length,
    }))
  );

  return (
    <div>
      <progress
        id="quiz-progress-bar"
        value={answersNumber}
        max={questionsNumber}
      >
        You answered {answersNumber} out of {questionsNumber}
      </progress>
    </div>
  );
};

export default QuizProgress;
