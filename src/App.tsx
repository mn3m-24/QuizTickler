import { Toaster } from "sonner";
import useQuizStore from "./store/use-quiz-store";
import QuizPage from "@/pages/quiz-page";
import ResultPage from "@/pages/result-page";
import StartPage from "@/pages/start-page";

function AppContent() {
  const status = useQuizStore((state) => state.status);
  switch (status) {
    case "idle":
      return <StartPage />;
    // case "loading":
    //   return <LoadingSpinner />;
    case "active":
      return <QuizPage />;
    case "completed":
      return <ResultPage />;
    default:
      return <StartPage />;
  }
}
function App() {
  return (
    <>
      <AppContent />
      <Toaster
        position="top-center"
        theme="dark"
        visibleToasts={3}
        richColors
      />
    </>
  );
}

export default App;
