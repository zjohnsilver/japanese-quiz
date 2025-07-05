import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import type { Question } from '@/src/types/questions';
import { shuffle } from '@/src/utils/shuffle';
import { divideEvenly } from '@/src/utils/math';
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
  questionsCount
}: {
  children: ReactNode;
  selectedCategories: QuizCategoryEnum[];
  setSelectedCategories: (cats: QuizCategoryEnum[]) => void;
  questionsCount: number
}) {


  const allQuestions = useMemo(() => {
    if (!selectedCategories || selectedCategories.length === 0) return [];

    const proportionPerCategory = divideEvenly(questionsCount, selectedCategories.length);

    return selectedCategories.flatMap((category, index) => {
      const maxQuestions = proportionPerCategory[index]
      const availableQuestions = questionsByCategory[category] || [];

      if (availableQuestions.length < maxQuestions) {
        console.warn(`Not enough questions in category ${category}. Requested ${maxQuestions}, got ${availableQuestions.length}`);
      }

      const shuffledQuestions = shuffle<Question>(availableQuestions);
      return shuffledQuestions
        .slice(0, maxQuestions)
        .map(question => ({
          ...question,
          options: shuffle([...question.options])
        }));
    });
  }, [selectedCategories, questionsCount]);

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