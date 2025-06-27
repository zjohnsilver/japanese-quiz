import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import type { Question } from '@/src/types/questions';
import { shuffle } from '@/src/utils/shuffle';
import { questionsByCategory } from '@/src/data/questions';
import { QuizCategoryEnum } from '@/src/enums/questions'

interface QuizContextValue {
  selectedCategories: string[];
  setSelectedCategories: (cats: QuizCategoryEnum[]) => void;
  questions: Question[];
}
const QuizContext = createContext<QuizContextValue | null>(null);

export function QuizProvider({
  children,
  selectedCategories,
  setSelectedCategories,
}: {
  children: ReactNode;
  selectedCategories: QuizCategoryEnum[];
  setSelectedCategories: (cats: QuizCategoryEnum[]) => void;
}) {
  const allQuestions = useMemo(() => {
    if (!selectedCategories || selectedCategories.length === 0) return [];
    return selectedCategories.flatMap(category => {
      const categoryQuestions = questionsByCategory[category] || [];
      const shuffledQuestions = shuffle<Question>(categoryQuestions);
      return shuffledQuestions.map(q => ({
        ...q,
        options: shuffle(q.options)
      })).slice(0, 5);
    });
  }, [selectedCategories]);

  const questions = useMemo(() => shuffle(allQuestions), [allQuestions]);

return (
    <QuizContext.Provider
      value={{
        selectedCategories,
        setSelectedCategories,
        questions
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