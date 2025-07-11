import React from 'react';
import { Card, Space, Typography } from 'antd';
import QuestionTitle from '@/src/components/QuestionTitle';
import OptionButton from '@/src/components/OptionButton';
import NextButton from '@/src/components/NextButton';
import RestartButton from '@/src/components/RestartButton';
import QuizCardHeader from '@/src/components/QuizCardHeader';

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
      <QuizCardHeader score={score} index={index} total={total} />
    }
    style={{ maxWidth: 400, margin: 'auto' }}
  >
    <QuestionTitle index={index} text={question.question} />
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Space direction="vertical" size="middle" style={{ width: '100%'}}>
        {question.options.map((opt) => (
          <OptionButton
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
    </div>
  </Card>
);

export default QuizCard;
