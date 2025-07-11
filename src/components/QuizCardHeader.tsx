import React from 'react';

interface QuizCardHeaderProps {
  score: number;
  index: number;
  total: number;
}

const QuizCardHeader: React.FC<QuizCardHeaderProps> = ({ score, index, total }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span style={{ fontSize: 20, fontWeight: 'bold', color: '#1677ff' }}>
      Score: {score}
    </span>
    <span style={{ fontSize: 20, color: '#555' }}>
      {index + 1} / {total}
    </span>
  </div>
);

export default QuizCardHeader;
