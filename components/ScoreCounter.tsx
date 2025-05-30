import { Tag } from 'antd';

interface ScoreCounterProps {
  score: number;
}

export default function ScoreCounter({ score }: ScoreCounterProps) {
  return (
    <div style={{ marginBottom: 16 }}>
      <Tag color="blue" style={{ fontSize: '1.2rem' }}>
        Score: {score}
      </Tag>
    </div>
  );
}