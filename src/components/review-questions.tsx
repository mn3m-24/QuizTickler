import useQuizStore from "@/store/use-quiz-store";
import decodeHtml from "@/utils/decode-html";

const ReviewQuestions = () => {
  const questions = useQuizStore((state) => state.questions);
  const answers = useQuizStore((state) => state.answers);
  return (
    <div>
      {questions.map((q, i) => (
        <details key={i}>
          <summary>
            {i + 1}. {decodeHtml(q.question)}{" "}
            {answers[i] === undefined
              ? "⚫Skipped"
              : answers[i] === q.correctAnswer
                ? "✅Correct"
                : "❌Wrong"}
          </summary>
          {q.options.map((opt) => (
            <div
              key={opt}
              style={
                opt === q.correctAnswer ? { color: "green" } : { color: "red" }
              }
            >
              {decodeHtml(opt)}
            </div>
          ))}
        </details>
      ))}
    </div>
  );
};

export default ReviewQuestions;
