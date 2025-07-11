import { Typography } from 'antd';
import React from 'react';

interface FeedbackProps {
  isCorrect: boolean;
  correctAnswer: string;
}

export default function Feedback({ isCorrect, correctAnswer }: FeedbackProps) {
  return (
    <Typography.Text type={isCorrect ? 'success' : 'danger'}>
      {isCorrect ? 'Correct!' : `Wrong! Correct answer: ${correctAnswer}`}
    </Typography.Text>
  );
}
