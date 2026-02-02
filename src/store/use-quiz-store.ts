import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";
import type { Question, UserAnswers } from "@/types/question";
import type { QuizStatus } from "@/types/quiz";

interface QuizStoreState {
  questions: Question[];
  currentQuestionIndex: number;
  answers: UserAnswers;
  endTime: number | null;
  status: QuizStatus;
}

interface QuizStoreActions {
  startQuiz: (questions: Question[]) => void;
  answerQuestion: (questionIndex: number, answer: string) => void;
  jumpToQuestion: (questionIndex: number) => void;
  submit: () => void;
  restart: () => void;
}

const initialState: QuizStoreState = {
  questions: [],
  currentQuestionIndex: 0,
  answers: {},
  endTime: null,
  status: "idle",
};

const TIME_PER_QUESTION = 15 * 1000; // 15s per question

const useQuizStore = create<QuizStoreState & QuizStoreActions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        startQuiz: (questions) =>
          set({
            questions,
            currentQuestionIndex: 0,
            answers: {},
            endTime: Date.now() + questions.length * TIME_PER_QUESTION,
            status: "active",
          }),
        answerQuestion: (questionIndex, answer) =>
          set((state) => ({
            answers: { ...state.answers, [questionIndex]: answer },
          })),
        jumpToQuestion: (questionIndex) =>
          set({ currentQuestionIndex: questionIndex }),
        submit: () => set({ status: "completed" }),
        restart: () => set({ ...initialState }),
      }),
      {
        name: "quiz-store",
        onRehydrateStorage: () => (state) => {
          // fixing flickering the quiz page before going to result page on rehydration if the quiz has ended
          if (
            state &&
            state.status === "active" &&
            state.endTime &&
            Date.now() > state.endTime
          )
            state.status = "completed";
        },
      }
    ),
    { name: "quizStore" }
  )
);

export default useQuizStore;
