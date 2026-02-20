import { Toaster } from "sonner";
import useQuizStore from "./store/use-quiz-store";
import QuizPage from "@/pages/quiz-page";
import ResultPage from "@/pages/result-page";
import StartPage from "@/pages/start-page";
import Header from "./components/header";
import Footer from "./components/footer";

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
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="container mx-auto px-4 flex flex-col flex-1 overflow-y-auto">
        <AppContent />
      </main>
      <Footer />
      <Toaster
        position="top-center"
        theme="dark"
        visibleToasts={3}
        richColors
      />
    </div>
  );
}

export default App;
