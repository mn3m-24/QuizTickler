import { useState } from "react";
import type { QuizSettings } from "@/types/quiz";
import { useQuestions } from "@/api/use-questions";
import { QuizForm } from "@/components/quiz-form";
import useQuizStore from "@/store/use-quiz-store";
import { toast } from "sonner";

const StartPage = () => {
  const [settings, setSettings] = useState<QuizSettings>({
    type: null,
    difficulty: null,
    category: null,
    amount: 10,
  });

  const [isReady, setIsReady] = useState<boolean>(false); // flag for fetching questions & starting the quiz

  const startQuiz = useQuizStore((state) => state.startQuiz);

  const { isLoading } = useQuestions(settings, isReady, {
    onSuccess: (data) => {
      startQuiz(data);
    },
    onError: (err: Error) => {
      setIsReady(false);
      toast.error(err.message); // Simple feedback
    },
  });

  return (
    <div className="start-page" style={{ display: "flex", gap: "10px" }}>
      <QuizForm
        settings={settings}
        onSettingsChange={setSettings}
        onStart={() => setIsReady(true)}
        isLoading={isLoading}
      />
    </div>
  );
};
export default StartPage;
