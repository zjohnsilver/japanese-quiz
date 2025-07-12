import React from 'react';
import { useTheme } from '@/src/contexts/ThemeContext';

interface QuizCardHeaderProps {
  score: number;
  index: number;
  total: number;
}

const QuizCardHeader: React.FC<QuizCardHeaderProps> = ({ score, index, total }) => {
  const { theme } = useTheme();
  
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 20, fontWeight: 'bold', color: theme.colors.primary }}>
        Score: {score}
      </span>
      <span style={{ fontSize: 20, color: theme.colors.textSecondary }}>
        {index + 1} / {total}
      </span>
    </div>
  );
};

export default QuizCardHeader;
