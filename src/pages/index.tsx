import SetupQuiz from '@/src/components/SetupQuiz';
import { useState } from 'react';
import { QuizProvider } from '@/src/components/QuizContext'
import Quiz from '@/src/components/Quiz'
import { QuizCategoryEnum } from '@/src/enums/questions'
import { ModeEnum } from '@/src/enums/questions';

export default function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState<QuizCategoryEnum[]>([]);
  const [questionsCount, setQuestionsCount] = useState<number>(0)
  const [countMode, setCountMode] = useState<ModeEnum>(ModeEnum.TOTAL);

  return selectedCategories.length > 0 && questionsCount > 0 ? (
    <QuizProvider 
      selectedCategories={selectedCategories} 
      setSelectedCategories={setSelectedCategories} 
      questionsCount={questionsCount} 
      countMode={countMode}
    >
      <Quiz selectedCategories={selectedCategories} />
    </QuizProvider>
  ) : (
    <SetupQuiz 
      onStart={setSelectedCategories}
      questionsCount={questionsCount}
      setQuestionsCount={setQuestionsCount}
      countMode={countMode}
      setCountMode={setCountMode} 
    />
  );
}
