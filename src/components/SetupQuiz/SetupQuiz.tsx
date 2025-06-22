import { useState } from 'react';
import { Checkbox, Button, Space, Typography } from 'antd';
import { quizCategoryLabels } from '@/src/data/questions';
import { QuizCategoryEnum } from '@/src/data/enums'
import styles from './styles.module.css';

interface Props {
  onStart: (categories: QuizCategoryEnum[]) => void;
}

export default function SetupQuiz({ onStart }: Props) {
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
    disabled={localSelected.length === 0}
    onClick={handleStartClick}
    style={{ marginTop: 16 }}
  >
    Start Quiz
  </Button>
</div>
  );
}
