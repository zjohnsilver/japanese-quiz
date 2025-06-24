import { createContext, ReactNode, useContext, useMemo } from 'react';
import type { Question } from '@/src/types/questions';
import { shuffle } from '@/src/utils/shuffle';
import { questionsByCategory } from '@/src/data/questions';
import { QuizCategoryEnum } from '@/src/enums/questions'

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
  selectedCategories: QuizCategoryEnum[];
}) {

  const allQuestions = useMemo(() => {
    if (!selectedCategories || selectedCategories.length === 0) return [];
    return selectedCategories.flatMap(category =>
      shuffle<Question>(questionsByCategory[category] || []).slice(0, 5)
    );
  }, [selectedCategories]);

  const questions = useMemo(() => {
    return shuffle(allQuestions)
  }, [selectedCategories])

  return (
    <QuizContext.Provider
      value={{
        selectedCategories,
        setSelectedCategories: () => {}, // no-op if you're controlling from outside
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