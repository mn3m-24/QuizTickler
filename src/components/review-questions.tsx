import type { Question } from '@/types';
import decodeHtml from '@/utils/decode-html';

interface ReviewQuestionsProps {
  questions: Question[];
  userAnswers: Record<number, string>;
}

const ReviewQuestions = ({ questions, userAnswers }: ReviewQuestionsProps) => {
  return (
    <div>
      {questions.map((q, i) => (
        <details>
          <summary>
            {i + 1}. {decodeHtml(q.question)}{' '}
            {userAnswers[i] === undefined
              ? '⚫Skipped'
              : userAnswers[i] === q.correct_answer
                ? '✅Correct'
                : '❌Wrong'}
          </summary>
          {q.answers.map((ans) => (
            <div
              style={
                ans === q.correct_answer ? { color: 'green' } : { color: 'red' }
              }
            >
              {decodeHtml(ans)}
            </div>
          ))}
        </details>
      ))}
    </div>
  );
};

export default ReviewQuestions;
