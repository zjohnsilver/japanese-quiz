import { createContext, useState, ReactNode, useContext } from 'react';
import type { Question } from '@/src/data/questions';

interface QuizContextValue {
  selectedCategories: string[];
  setSelectedCategories: (cats: string[]) => void;
  questions: Question[];
}
const QuizContext = createContext<QuizContextValue | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const allQuestions = selectedCategories.flatMap(category =>
    require(`@/src/data/questions`).questionsByCategory[category] || []
  );
 
  const questions = allQuestions.sort(() => Math.random() - 0.5);

  return (
    <QuizContext.Provider value={{ selectedCategories, setSelectedCategories, questions }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error('useQuiz must be inside a QuizProvider');
  return ctx;
}