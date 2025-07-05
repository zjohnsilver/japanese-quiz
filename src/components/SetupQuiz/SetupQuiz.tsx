import { useState } from 'react';
import { Button, Typography } from 'antd';
import { quizCategoryLabels } from '@/src/data/questions';
import { QuizCategoryEnum } from '@/src/enums/questions'
import styles from './styles.module.css';
import QuestionSetupOptions from '@/src/components/QuestionSetupOptions';
import { ModeEnum } from '@/src/enums/questions';

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
        Ready to practice? Pick your quiz categories!
      </Typography.Title>

      <div className={styles.contentWrapper}>
        <div className={styles.setupColumn}>
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
              <button
                key={key}
                className={`${styles.categoryButton} ${localSelected.includes(key) ? styles.selected : ''}`}
                onClick={() => toggleCategory(key)}
              >
                {label}
              </button>
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
