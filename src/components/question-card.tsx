import type { Question } from '@/types';
import decodeHtml from '@/utils/decode-html';
import { type ChangeEvent, memo } from 'react';

interface QuestionCardProps {
  question: Question;
  answer: string;
  onAnswer: (e: ChangeEvent<HTMLInputElement>) => void;
}

const QuestionCard = memo(
  ({ question, answer, onAnswer }: QuestionCardProps) => {
    return (
      <div className="question-card">
        <span>{decodeHtml(question.difficulty)}</span>
        <span>{decodeHtml(question.category)}</span>
        <span>{decodeHtml(question.type)}</span>
        <p>{decodeHtml(question.question)}</p>
        <div>
          {question.answers.map((a) => (
            <div key={a}>
              <label htmlFor={a}>{decodeHtml(a)}</label>
              <input
                type="radio"
                value={a}
                checked={answer === a}
                onChange={onAnswer}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default QuestionCard;
