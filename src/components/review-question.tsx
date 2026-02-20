import type { Question } from "@/types/question";
import decodeHtml from "@/utils/decode-html";
import { CircleCheck, CircleX } from "lucide-react";

interface ReviewQuestionProps {
  question: Question;
  userAnswer: string;
}

const ReviewQuestion = ({ question, userAnswer }: ReviewQuestionProps) => {
  const isWrong = userAnswer !== question.correctAnswer;
  return (
    <div className="flex items-center border rounded bg-muted">
      <div className="p-2">
        {isWrong ? (
          <CircleX size={32} className="text-red-700" />
        ) : (
          <CircleCheck size={32} className="text-green-700" />
        )}
      </div>
      <div className="flex flex-col">
        <h3>{decodeHtml(question.question)}</h3>
        <h4>
          <span>Selected: </span>
          <span className={isWrong ? "text-red-700" : "text-green-700"}>
            {userAnswer || "Skipped"}
          </span>
          {isWrong && (
            <span> · Correct: {decodeHtml(question.correctAnswer)}</span>
          )}
        </h4>
      </div>
    </div>
  );
};

export default ReviewQuestion;
