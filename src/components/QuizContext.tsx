import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import type { Question } from '@/src/types/questions';
import { shuffle } from '@/src/utils/shuffle';
import { divideEvenly } from '@/src/utils/math';
import { questionsByCategory } from '@/src/data/questions';
import { QuizCategoryEnum, ModeEnum } from '@/src/enums/questions'

interface QuizContextValue {
  selectedCategories: string[];
  setSelectedCategories: (cats: QuizCategoryEnum[]) => void;
  questions: Question[];
}
const QuizContext = createContext<QuizContextValue | null>(null);


function getTotal(selectedCategories: QuizCategoryEnum[], questionsCount: number) {
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
}

function getPerCategory(selectedCategories: QuizCategoryEnum[], questionsCount: number) {
  const maxQuestions = questionsCount;

  if (!selectedCategories || selectedCategories.length === 0) return [];

  return selectedCategories.flatMap((category) => {
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
}

export function QuizProvider({
  children,
  selectedCategories,
  setSelectedCategories,
  questionsCount,
  countMode
}: {
  children: ReactNode;
  selectedCategories: QuizCategoryEnum[];
  setSelectedCategories: (cats: QuizCategoryEnum[]) => void;
  questionsCount: number
  countMode: ModeEnum
}) {


  const allQuestions = useMemo(() => {
    switch(countMode) {
      case ModeEnum.TOTAL:
        return getTotal(selectedCategories, questionsCount);
      case ModeEnum.PER_CATEGORY:
        return getPerCategory(selectedCategories, questionsCount);
    }
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