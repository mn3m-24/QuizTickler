import useCountdown from "@/hooks/use-countdown";
import useQuizStore from "@/store/use-quiz-store";
import cn from "@/utils/cn";
import formatTime from "@/utils/format-time";
import { Timer } from "lucide-react";

interface QuizTimerProps {
  onEnd: () => void;
}

const QuizTimer = ({ onEnd }: QuizTimerProps) => {
  const endTime = useQuizStore((state) => state.endTime);
  const timeLeft = useCountdown(endTime ?? 0, onEnd);
  const isUrgent = timeLeft <= 10000;

  const { seconds, minutes } = formatTime(timeLeft);

  return (
    <h1 className={cn(
       "flex justify-center items-center gap-2 text-center",
       isUrgent ? "text-red-500" : "text-gray-700"
    )}>
      <Timer />
      <div> {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")} </div>
    </h1>
  );
};

export default QuizTimer;
