import React from 'react';
import { Card, Space, Typography } from 'antd';
import ScoreCounter from '@/src/components/ScoreCounter';
import QuestionTitle from '@/src/components/QuestionTitle';
import AnswerButton from '@/src/components/AnswerButton';
import NextButton from '@/src/components/NextButton';
import RestartButton from '@/src/components/RestartButton';

type QuizCardProps = {
  score: number;
  index: number;
  total: number;
  question: {
    question: string;
    options: string[];
    correctAnswer: string;
  };
  selected: string | null;
  isCorrect: boolean;
  wasAnswered: boolean;
  isLast: boolean;
  handleAnswer: (option: string) => void;
  handleNext: () => void;
  handleRestart: () => void;
};

const QuizCard: React.FC<QuizCardProps> = ({
  score,
  index,
  total,
  question,
  selected,
  isCorrect,
  wasAnswered,
  isLast,
  handleAnswer,
  handleNext,
  handleRestart,
}) => (
  <Card title="Japanese Quiz" style={{ maxWidth: 400, margin: 'auto' }}>
    <ScoreCounter score={score} />
    <QuestionTitle index={index} total={total} text={question.question} />
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      {question.options.map((opt) => (
        <AnswerButton
          key={opt}
          option={opt}
          isSelected={opt === selected}          
          correctAnswer={question.correctAnswer}
          wasAnswered={wasAnswered}
          onSelect={handleAnswer}
        />
      ))}
      {wasAnswered && (
        <>
          {!isLast && <NextButton isLast={isLast} onNext={handleNext} />}
          {isLast && (
            <>
              <Typography.Text strong>
                End of Quiz! Final Score: {score} / {total}
              </Typography.Text>
              <RestartButton onClick={handleRestart} />
            </>
          )}
        </>
      )}
    </Space>
  </Card>
);

export default QuizCard;
