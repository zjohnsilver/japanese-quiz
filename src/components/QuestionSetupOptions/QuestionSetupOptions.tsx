import { Button, Radio, RadioChangeEvent, Typography } from 'antd';
import styles from './styles.module.css';
import { ModeEnum, MODE_LABELS } from '@/src/enums/questions';

const QUESTION_OPTIONS = [5, 10, 25, 50];

interface Props {
  selectedCount: number;
  onCountChange: (count: number) => void;
  countMode: ModeEnum;
  onModeChange: (mode: ModeEnum) => void;
}

export default function QuestionSetupOptions({
  selectedCount,
  onCountChange,
  countMode,
  onModeChange,
}: Props) {
  const handleModeChange = (e: RadioChangeEvent) => {
    onModeChange(e.target.value);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.section}>
        <Typography.Text strong>Select amount of questions:</Typography.Text>
        <div className={styles.buttonGrid}>
          {QUESTION_OPTIONS.map((count) => (
            <Button
              key={count}
              type={selectedCount === count ? 'primary' : 'default'}
              shape="round"
              onClick={() => onCountChange(count)}
              className={styles.fixedWidthButton}
            >
              {count}
            </Button>
          ))}
        </div>
      </div>

      <div className={styles.section} style={{ marginTop: 24 }}>
        <Typography.Text strong>Mode:</Typography.Text>
        <Radio.Group
          value={countMode}
          onChange={handleModeChange}
          style={{ display: 'flex', flexDirection: 'column', marginTop: 8 }}
        >
          {Object.values(ModeEnum).map((mode) => (
            <Radio key={mode} value={mode}>
              {MODE_LABELS[mode]}
            </Radio>
          ))}
        </Radio.Group>
      </div>
    </div>
  );
}