import { Button, Space, Typography } from 'antd';
import styles from './QuestionCountSelector.module.css';

interface Props {
  selectedCount: number;
  onChange: (count: number) => void;
}

const OPTIONS = [10, 25, 50];

export default function QuestionCountSelector({ selectedCount, onChange }: Props) {
  return (
    <div className={styles.container}>
      <Typography.Text strong>Select number of questions:</Typography.Text>
      <Space>
        {OPTIONS.map((count) => (
          <Button
            key={count}
            type={selectedCount === count ? 'primary' : 'default'}
            shape="round"
            onClick={() => onChange(count)}
          >
            {count}
          </Button>
        ))}
      </Space>
    </div>
  );
}
