import SetupQuiz from '@/src/components/SetupQuiz';
import { useState } from 'react';
import { QuizProvider } from '@/src/components/QuizContext'
import Quiz from '@/src/components/Quiz'
import { QuizCategoryEnum } from '@/src/enums/questions'

export default function HomePage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<QuizCategoryEnum[]>([]);

  const handleStartQuiz = (categories: QuizCategoryEnum[]) => {
    setSelectedCategories(categories);
    setQuizStarted(true);
  };

  return (
    <QuizProvider selectedCategories={selectedCategories}>
      {quizStarted ? (
        <Quiz selectedCategories={selectedCategories}/>
      ) : (
        <SetupQuiz onStart={handleStartQuiz} />
      )}
    </QuizProvider>
  );
}
