import { Button, Radio, RadioChangeEvent, Typography } from 'antd';
import styles from './styles.module.css';
import { ModeEnum } from '@/src/enums/questions';

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
    <div className={styles.setupRow}>
      <div className={styles.section}>
        <Typography.Text strong>
          Select number of questions:
        </Typography.Text>

        <div className={styles.buttonGrid}>
          {QUESTION_OPTIONS.map((count) => (
            <Button
              key={count}
              type={selectedCount === count ? 'primary' : 'default'}
              shape="round"
              onClick={() => onCountChange(count)}
              className={styles.gridButton}
            >
              {count}
            </Button>
          ))}
        </div>
      </div>

      <div className={`${styles.section} ${styles.verticalCenter}`}>
        <Typography.Text strong>Mode:</Typography.Text>
        <Radio.Group
          value={countMode}
          onChange={handleModeChange}
          className={styles.radioGroup}
        >
          <Radio value={ModeEnum.TOTAL}>
            Total
            <div className={styles.radioDescription}>Total number of questions</div>
          </Radio>
          <Radio value={ModeEnum.PER_CATEGORY}>
            Per category
            <div className={styles.radioDescription}>Questions per selected category</div>
          </Radio>
        </Radio.Group>
      </div>
    </div>
  );
}