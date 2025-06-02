import { Card, Space, Typography } from 'antd';
import { useState,  } from 'react';
import ScoreCounter from './ScoreCounter';
import QuestionTitle from './QuestionTitle';
import AnswerButton from './AnswerButton';
import Feedback from './Feedback';
import NextButton from './NextButton';
import { useQuiz } from './QuizContext'
import RestartButton from './RestartButton';
import { useRouter } from 'next/router';

export default function Quiz() {
  const { questions, setSelectedCategories } = useQuiz();

  const router = useRouter();

  const total = questions?.length;

  if (!total) {
    return <Typography.Text>Please select at least one category on the home page.</Typography.Text>;
  }

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [wasAnswered, setWasAnswered] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const question = questions[index];
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
    <Card title="Japanese Quiz" style={{ maxWidth: 400, margin: 'auto' }}>
      <ScoreCounter score={score} />
      <QuestionTitle index={index} total={total} text={question.question} />
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        {question.options.map((opt) => (
          <AnswerButton
            key={opt}
            option={opt}
            isCorrect={opt === question.correctAnswer}
            isSelected={opt === selected}
            disabled={wasAnswered}
            onSelect={handleAnswer}
          />
        ))}
        {wasAnswered && <Feedback isCorrect={isCorrect} correctAnswer={question.correctAnswer} />}
        {wasAnswered && !isLast && <NextButton isLast={isLast} onNext={handleNext} />}
        {wasAnswered && isLast && (
          <>
            <Typography.Text strong>End of Quiz! Final Score: {score} / {total}</Typography.Text>
            <RestartButton onClick={handleRestart}/>
          </>
        )}
        
      </Space>
    </Card>
  );
}