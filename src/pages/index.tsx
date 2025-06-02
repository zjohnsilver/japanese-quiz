import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Checkbox, Space, Button, Typography } from 'antd';

import { useQuiz } from '@/src/components/QuizContext';
import { quizCategoryLabels } from '@/src/data/questions';

export default function CategorySelectionPage() {
  const router = useRouter();
  const { selectedCategories, setSelectedCategories } = useQuiz();
  const [canStart, setCanStart] = useState(false);

  const categoryKeyLabel = Object.entries(quizCategoryLabels);

  useEffect(() => {
    setCanStart(selectedCategories.length > 0);
  }, [selectedCategories]);

  const onCheckboxChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  const onStartQuiz = () => {
    if (selectedCategories.length > 0) {
      router.push('/quiz');
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <Typography.Title level={2}>Select Quiz Categories</Typography.Title>

      <Space direction="vertical">
        {categoryKeyLabel.map(([key, label]) => (
          <Checkbox
            key={key}
            checked={selectedCategories.includes(key)}
            onChange={(e) => onCheckboxChange(key, e.target.checked)}
          >
            {label}
          </Checkbox>
        ))}
      </Space>

      <Button
        type="primary"
        disabled={!canStart}
        onClick={onStartQuiz}
        style={{ marginTop: 16 }}
      >
        Start Quiz
      </Button>
    </div>
  );
}
