import React from 'react';
import { Typography } from 'antd';

type FinalFeedbackProps = {
  score: number;
  total: number;
};

const getFinalMessage = (score: number, total: number) => {
  const ratio = score / total;
  if (ratio === 1) return { message: "Perfect! 🏆 You mastered it!", type: 'success' as const };
  if (ratio >= 0.8) return { message: "Great job! 🎉 You're learning fast!", type: 'success' as const };
  if (ratio >= 0.5) return { message: "Nice work! 🙌 You're almost there!", type: 'warning' as const };
  if (ratio > 0) return { message: "Good effort! 💡 Every step counts!", type: 'warning' as const };
  return { message: "Don't give up! 💪 Practice makes perfect.", type: 'danger' as const };
};

const FinalFeedback: React.FC<FinalFeedbackProps> = ({ score, total }) => {
  const { message, type } = getFinalMessage(score, total);

  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <Typography.Text strong type={type}>
        {message}
      </Typography.Text>
      <br />
      <Typography.Text type="secondary">
        Final Score: {score} / {total}
      </Typography.Text>
    </div>
  );
};

export default FinalFeedback;
