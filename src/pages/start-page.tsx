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
    <div className="flex-1 flex flex-col justify-center">
      <div className="flex flex-col gap-4 mb-14">
        <h1 className="text-6xl text-center">Let's Get Quizzy</h1>
        <p className="text-muted-foreground text-center"> Configure your learning session with precision. </p>
      </div>

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
