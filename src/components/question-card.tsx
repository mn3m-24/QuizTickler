import useQuizStore from '@/store/use-quiz-store';
import decodeHtml from '@/utils/decode-html';

const QuestionCard = () => {
  const currentQuestionIndex = useQuizStore(
    (state) => state.currentQuestionIndex
  );
  const currentQuestion = useQuizStore(
    (state) => state.questions[state.currentQuestionIndex]
  );
  const currentAnswer = useQuizStore(
    (state) => state.answers[state.currentQuestionIndex]
  );

  const answerQuestion = useQuizStore((state) => state.answerQuestion);

  return (
    <div className="question-card">
      <span>{decodeHtml(currentQuestion.difficulty)}</span>
      <span>{decodeHtml(currentQuestion.category)}</span>
      <p>{decodeHtml(currentQuestion.question)}</p>
      <div>
        {currentQuestion.options.map((o, i) => {
          const id = `q-${currentQuestionIndex}-opt-${i}`;
          return (
            <div key={id}>
              <label htmlFor={id}>{decodeHtml(o)}</label>
              <input
                id={id}
                type="radio"
                value={o}
                checked={currentAnswer === o}
                onChange={(e) =>
                  answerQuestion(currentQuestionIndex, e.target.value)
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
