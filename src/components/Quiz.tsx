import { Card, Space, Typography, Tag } from 'antd';
import { useState,  } from 'react';
import { useQuiz } from './QuizContext'
import { useRouter } from 'next/router';
import { quizCategoryLabels } from '@/src/data/questions'
import { QuizCategoryEnum } from '@/src/enums/questions'
import QuizCard from '@/src/components/QuizCard';

const categoryColors: Record<string, string> = {
  hiragana: 'purple',
  katakana: 'magenta',
  vocabulary: 'orange',
  colors: 'cyan',
  particleQuestions: 'green',
  foodVocabulary: 'red',
  family: 'pink'
};

export default function Quiz({ selectedCategories }: { selectedCategories: QuizCategoryEnum[]; }) {
  const { questions, setSelectedCategories } = useQuiz();

  const router = useRouter();

  const total = questions?.length;
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [wasAnswered, setWasAnswered] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const question = questions[index];
  if (!question) return null;
  const isCorrect = selected === question.correctAnswer;
  const isLast = index === total - 1;

  const handleAnswer = (answer: string) => {
    if (wasAnswered) return;
    setWasAnswered(true);
    setSelected(answer);
    if (answer === question.correctAnswer) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    setWasAnswered(false);
    setSelected(null);
    setIndex((prev) => prev + 1);
  };

  const handleRestart = () => {
    setSelectedCategories([]);
    router.push('/');
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', paddingTop: 24 }}>
      <Card
        size="small"
        style={{ marginBottom: 16, backgroundColor: '#fafafa' }}
        bordered={false}
      >
        <Space align="start" wrap>
          <Typography.Text strong style={{ fontSize: 16 }}>
            Categories:
          </Typography.Text>
          {selectedCategories.map((category) => (
            <Tag key={category} color={categoryColors[category] || 'default'}>
              {quizCategoryLabels[category] || category}
            </Tag>
          ))}
        </Space>
      </Card>

      <QuizCard
        score={score}
        index={index}
        total={total}
        question={question}
        selected={selected}
        isCorrect={isCorrect}
        wasAnswered={wasAnswered}
        isLast={isLast}
        handleAnswer={handleAnswer}
        handleNext={handleNext}
        handleRestart={handleRestart}
      />
    </div>
  );
}