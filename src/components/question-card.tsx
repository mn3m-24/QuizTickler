import useQuizStore from "@/store/use-quiz-store";
import decodeHtml from "@/utils/decode-html";
import Badge from "./ui/badge";
import type { QuestionDifficulty } from "@/types/question";
import Card from "./ui/card";
import ProgressBar from "./ui/progress-bar";

const QuestionCard = () => {
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );

  const questions = useQuizStore((state) => state.questions);
  const currentQuestion = questions[currentQuestionIndex];

  const answers = useQuizStore((state) => state.answers);
  const currentAnswer = answers[currentQuestionIndex];
  const answersNumber = Object.keys(answers).length;

  const answerQuestion = useQuizStore((state) => state.answerQuestion);

  const difficulty = decodeHtml(
    currentQuestion.difficulty
  ) as QuestionDifficulty;

  return (
    <Card className="w-full flex flex-col gap-2 overflow-hidden min-h-96">
      <ProgressBar value={answersNumber} max={questions.length} />
      <div className="w-full flex flex-col flex-1 gap-4 justify-between p-6">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Badge variant={difficulty}>{difficulty}</Badge>
            <Badge variant="category">
              {decodeHtml(currentQuestion.category)}
            </Badge>
          </div>
          <h3>{decodeHtml(currentQuestion.question)}</h3>
        </div>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
          {currentQuestion.options.map((o, i) => {
            const id = `q-${currentQuestionIndex}-opt-${i}`;
            return (
              <label
                key={id}
              >
                <input
                  type="radio"
                  value={o}
                  checked={currentAnswer === o}
                  onChange={(e) =>
                    answerQuestion(currentQuestionIndex, e.target.value)
                  }
                  className="sr-only peer"
                />
                <div className="h-full flex justify-center items-center text-center text-secondary-foreground text-xl font-medium peer-checked:bg-primary peer-checked:text-primary-foreground px-2 py-1 border border-gray-400 shadow-lg rounded transition-all hover:brightness-90  dark:brightness-110  cursor-pointer">
                  {decodeHtml(o)}
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default QuestionCard;
