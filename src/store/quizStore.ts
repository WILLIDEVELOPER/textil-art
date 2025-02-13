import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Submission {
  email: string;
  answers: Record<string, string>;
  score: number;
  date: string;
}

interface QuizState {
  email: string;
  answers: Record<string, string>;
  score: number;
  submitted: boolean;
  submissions: Record<string, Submission>; // Nuevo campo
  setEmail: (email: string) => void;
  addAnswer: (question: string, answer: string) => void;
  setScore: (score: number) => void;
  submitQuiz: () => void;
  reset: () => void;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      email: "",
      answers: {},
      score: 0,
      submitted: false,
      submissions: {}, // Inicializar submissions
      setEmail: (email) => set({ email: email.toLowerCase().trim() }),
      addAnswer: (question, answer) =>
        set((state) => ({
          answers: { ...state.answers, [question]: answer },
        })),
      setScore: (score) => set({ score }),
      submitQuiz: () =>
        set((state) => {
          const newSubmission = {
            email: state.email,
            answers: state.answers,
            score: state.score,
            date: new Date().toISOString(),
          };

          return {
            submitted: true,
            submissions: {
              ...state.submissions,
              [state.email]: newSubmission,
            },
          };
        }),
      reset: () =>
        set({
          email: "",
          answers: {},
          score: 0,
          submitted: false,
          // No resetear submissions aquí
        }),
    }),
    {
      name: "quiz-storage",
      partialize: (state) => ({
        submissions: state.submissions, // Solo persistir las submissions
      }),
    }
  )
);
