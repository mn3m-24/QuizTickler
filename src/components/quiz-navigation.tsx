import type { Question } from '@/types';

interface QuizNavigationProps {
  questions: Question[];
  onJump: (questionIdx: number) => void;
  currentQuestionIndex: number;
}

const QuizNavigation = ({
  questions,
  onJump,
  currentQuestionIndex,
}: QuizNavigationProps) => {
  return (
    <div className="quiz-navigation">
      {questions.map((q, i) => (
        <button
          key={q.question}
          onClick={() => onJump(i)}
          style={
            i === currentQuestionIndex
              ? {
                  backgroundColor: '#0056b3',
                  boxShadow: 'inset 0 3px 5px rgba(0,0,0,0.3)',
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
