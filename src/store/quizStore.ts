import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Answer {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

interface Submission {
  email: string;
  answers: Answer[];
  score: number;
  date: string;
  totalQuestions: number;
}

interface QuizState {
  email: string;
  answers: Record<string, Answer>;
  score: number;
  submissions: Record<string, Submission>;
  setEmail: (email: string) => void;
  addAnswer: (question: string, answerData: Answer) => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      email: "",
      answers: {},
      score: 0,
      submissions: {},
      setEmail: (email) => set({ email: email.toLowerCase().trim() }),
      addAnswer: (question, answerData) =>
        set((state) => ({
          answers: { ...state.answers, [question]: answerData },
          score: Object.values({ ...state.answers, [question]: answerData })
            .filter(answer => answer.isCorrect).length
        })),
      resetQuiz: () => set({ email: "", answers: {}, score: 0 }),
    }),
    {
      name: "quiz-storage",
      partialize: (state) => ({
        submissions: state.submissions,
      }),
    }
  )
);