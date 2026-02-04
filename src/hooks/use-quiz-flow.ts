import { useState, useCallback } from "react";
import useQuizStore from "@/store/use-quiz-store";

const useQuizFlow = () => {
  const submit = useQuizStore((state) => state.submit);

  const [isModalOpen, setIsModalOpen] = useState(false);
  // using callback because handleConfirmSubmit function is passed as a prop, so its reference change on each QuizPage re-render because it is used in an useEffect
  const handleSubmit = useCallback(() => {
    submit();
    setIsModalOpen(false); // close modal after submitting
  }, [submit]);
  return { isModalOpen, setIsModalOpen, handleSubmit };
};

export default useQuizFlow;
