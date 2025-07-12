import { useState } from 'react';
import { Button, Typography } from 'antd';
import { quizCategoryLabels, questionsByCategory } from '@/src/data/questions';
import { QuizCategoryEnum } from '@/src/enums/questions'
import styles from './styles.module.css';
import QuestionSetupOptions from '@/src/components/QuestionSetupOptions';
import { ModeEnum } from '@/src/enums/questions';
import CategoryCard from '@/src/components/CategoryCard';

export default function SetupQuiz(
  { onStart, questionsCount, setQuestionsCount, countMode, setCountMode }: 
  {
    onStart: (categories: QuizCategoryEnum[]) => void;
    questionsCount: number,
    setQuestionsCount: (questionsCount: number) => void;
    countMode: ModeEnum
    setCountMode: (countModel: ModeEnum) => void;
  }
) {
  const [localSelected, setLocalSelected] = useState<QuizCategoryEnum[]>([]);
  const categoryKeyLabel = Object.entries(quizCategoryLabels) as [QuizCategoryEnum, string][];;

  const toggleCategory = (category: QuizCategoryEnum) => {
    setLocalSelected(prev =>
      prev.includes(category)
      ? prev.filter(c => c !== category)
      : [...prev, category]
    );
  };

  const handleStartClick = () => {
    onStart(localSelected);
  };

  return (
    <div className={styles.setupContainer}>
      <Typography.Title level={2}>
        🇯🇵 <strong style={{ color: '#d9363e' }}>Ready</strong> to test your Japanese?<br />
        <strong style={{ color: '#3b82f6' }}>Select your quiz categories!</strong>
      </Typography.Title>

      <div className={styles.contentWrapper}>
        <div>
          <QuestionSetupOptions
            selectedCount={questionsCount}
            onCountChange={setQuestionsCount}
            countMode={countMode}
            onModeChange={setCountMode}
          />
        </div>

        <div className={styles.categoryColumn}>
          <div className={styles.gridCategories}>
            {categoryKeyLabel.map(([key, label]) => (
              <CategoryCard
                key={key}
                label={label}
                selected={localSelected.includes(key)}
                onClick={() => toggleCategory(key)}
                questionCount={questionsByCategory[key]?.length ?? 0}
              />
            ))}
          </div>

          <Button
            type="primary"
            disabled={localSelected.length === 0 || questionsCount === 0}
            onClick={handleStartClick}
            style={{ marginTop: 16 }}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}
