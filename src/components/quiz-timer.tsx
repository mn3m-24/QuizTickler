import useCountdown from '@/hooks/use-countdown';
import formatTime from '@/utils/format-time';

interface QuizTimerProps {
  endTime: number;
  onEnd: () => void;
}

const QuizTimer = ({ endTime, onEnd }: QuizTimerProps) => {
  const timeLeft = useCountdown(endTime, onEnd);
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
