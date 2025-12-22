import type { QuizState, QuizActions } from '../types';

// initial state before starting a quiz
export const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  endTime: null,
};

// The reducer function
export const quizReducer = (
  state: QuizState,
  action: QuizActions
): QuizState => {
  switch (action.type) {
    case 'START': {
      const { questions } = action.payload;
      const timePerQuestion = 15 * 1000; // 15s
      return {
        questions,
        currentQuestionIndex: 0,
        answers: [],
        endTime: Date.now() + questions.length * timePerQuestion,
      };
    }
    case 'JUMP_TO_QUESTION': {
      return {
        ...state,
        currentQuestionIndex: Math.max(
          0,
          Math.min(action.payload.questionIdx, state.questions.length - 1)
        ),
      };
    }
    case 'ANSWER_QUESTION': {
      const { questionIdx, answer } = action.payload;
      return {
        ...state,
        answers: {
          ...state.answers,
          [questionIdx]: answer,
        },
      };
    }
    case 'SUBMIT': {
      return {
        ...state,
        endTime: null, // clear time to indicate finished & transition to the result page
      };
    }
    case 'RESTART': {
      return initialState;
    }
    default:
      return state;
  }
};
