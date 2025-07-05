import { useState } from 'react';
import { Button, Typography, Segmented } from 'antd';
import { quizCategoryLabels } from '@/src/data/questions';
import { QuizCategoryEnum } from '@/src/enums/questions'
import styles from './styles.module.css';
import QuestionCountSelector from '@/src/components/QuestionCountSelector';

interface Props {
  onStart: (categories: QuizCategoryEnum[]) => void;
  questionsCount: number,
  setQuestionsCount: (questionsCount: number) => void;
}

export default function SetupQuiz({ onStart, questionsCount, setQuestionsCount }: Props) {
  const [localSelected, setLocalSelected] = useState<QuizCategoryEnum[]>([]);

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

  const categoryKeyLabel = Object.entries(quizCategoryLabels) as [QuizCategoryEnum, string][];;

  return (
    <div className={styles.setupContainer}>
      <Typography.Title level={2}>Ready to practice? Pick your quiz categories!</Typography.Title>
      
      <QuestionCountSelector
        selectedCount={questionsCount}
        onChange={setQuestionsCount}
      /> 

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
        disabled={(localSelected.length === 0) || (questionsCount === 0)}
        onClick={handleStartClick}
        style={{ marginTop: 16 }}
      >
        Start Quiz
      </Button>
    </div>
  );
}
