import SetupQuiz from '@/src/components/SetupQuiz';
import { useState } from 'react';
import { QuizProvider } from '@/src/components/QuizContext'
import Quiz from '@/src/components/Quiz'
import { QuizCategoryEnum } from '@/src/enums/questions'

export default function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState<QuizCategoryEnum[]>([]);

  return selectedCategories.length > 0 ? (
    <QuizProvider selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}>
      <Quiz selectedCategories={selectedCategories} />
    </QuizProvider>
  ) : (
    <SetupQuiz onStart={setSelectedCategories} />
  );
}
