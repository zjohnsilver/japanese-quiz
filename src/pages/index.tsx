import SetupQuiz from '@/src/components/SetupQuiz';
import Head from 'next/head';
import { useState } from 'react';
import { QuizProvider } from '@/src/components/QuizContext'
import Quiz from '@/src/components/Quiz'
import { QuizCategoryEnum } from '@/src/enums/questions'
import { ModeEnum } from '@/src/enums/questions';

export default function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState<QuizCategoryEnum[]>([]);
  const [questionsCount, setQuestionsCount] = useState<number>(5)
  const [countMode, setCountMode] = useState<ModeEnum>(ModeEnum.TOTAL);

  return (
    <>
      <Head>
        <title>Japanese Quiz 🇯🇵🧠</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/jq_favicon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/jq_favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/jq_favicon-512x512.png" />
        <meta name="theme-color" content="#bc002d" />        
      </Head>

      {selectedCategories.length > 0 && questionsCount > 0 ? (
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
      )}
    </>
  );
}
