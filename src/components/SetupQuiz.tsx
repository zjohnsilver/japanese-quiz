import { useState } from 'react';
import { Checkbox, Button, Space, Typography } from 'antd';
import { quizCategoryLabels } from '@/src/data/questions';
import { QuizCategoryEnum } from '@/src/data/enums'

interface Props {
  onStart: (categories: QuizCategoryEnum[]) => void;
}

export default function SetupQuiz({ onStart }: Props) {
  const [localSelected, setLocalSelected] = useState<QuizCategoryEnum[]>([]);

  const onCheckboxChange = (category: QuizCategoryEnum, checked: boolean) => {
    setLocalSelected(prev =>
      checked
      ? [...prev, category]
      : prev.filter(c => c !== category)
    );
  };

  const handleStartClick = () => {
    onStart(localSelected);
  };

  const categoryKeyLabel = Object.entries(quizCategoryLabels) as [QuizCategoryEnum, string][];;

  return (
    <div style={{ padding: 24 }}>
      <Typography.Title level={2}>Select Quiz Categories</Typography.Title>

      <Space direction="vertical">
        {categoryKeyLabel.map(([key, label]) => (
          <Checkbox
            key={key}
            checked={localSelected.includes(key)}
            onChange={(e) => onCheckboxChange(key, e.target.checked)}
          >
            {label}
          </Checkbox>
        ))}
      </Space>

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
