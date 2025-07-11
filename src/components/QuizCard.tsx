import React from 'react';
import { Card, Space, Typography } from 'antd';
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
  wasAnswered,
  isLast,
  handleAnswer,
  handleNext,
  handleRestart,
}) => (
  <Card 
    title={
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 20, fontWeight: 'bold', color: '#1677ff' }}>Score: {score}</span>
        <span style={{ fontSize: 20, color: '#555' }}>
          {index + 1} / {total}
        </span>
      </div>
    }
    style={{ maxWidth: 400, margin: 'auto' }}
  >
    <QuestionTitle index={index} text={question.question} />
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
