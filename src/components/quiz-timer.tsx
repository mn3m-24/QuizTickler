import useCountdown from '@/hooks/use-countdown';
import useQuizStore from '@/store/use-quiz-store';
import formatTime from '@/utils/format-time';

interface QuizTimerProps {
  onEnd: () => void;
}

const QuizTimer = ({ onEnd }: QuizTimerProps) => {
  const endTime = useQuizStore((state) => state.endTime);
  const timeLeft = useCountdown(endTime ?? 0, onEnd);
  const isUrgent = timeLeft <= 10000;

  const { seconds, minutes } = formatTime(timeLeft);

  return (
    <h1 style={isUrgent ? { color: 'red' } : { color: 'gray' }}>
      {minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
    </h1>
  );
};

export default QuizTimer;
