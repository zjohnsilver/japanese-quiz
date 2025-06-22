import { createContext, useState, ReactNode, useContext, useMemo } from 'react';
import type { Question } from '@/src/data/questions';

interface QuizContextValue {
  selectedCategories: string[];
  setSelectedCategories: (cats: string[]) => void;
  questions: Question[];
}
const QuizContext = createContext<QuizContextValue | null>(null);

export function QuizProvider({
  children,
  selectedCategories,
}: {
  children: ReactNode;
  selectedCategories: string[];
}) {

  const allQuestions = useMemo(() => {
    if (!selectedCategories || selectedCategories.length === 0) return [];
    return selectedCategories.flatMap(category =>
      require('@/src/data/questions').questionsByCategory[category] || []
    );
  }, [selectedCategories]);

  const questions = useMemo(
    () => allQuestions.sort(() => Math.random() - 0.5),
    [selectedCategories]
  );

  return (
    <QuizContext.Provider
      value={{
        selectedCategories,
        setSelectedCategories: () => {}, // no-op if you're controlling from outside
        questions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}


export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error('useQuiz must be inside a QuizProvider');
  return ctx;
}