import styles from './styles.module.css';

interface Props {
  label: string;
  selected: boolean;
  onClick: () => void;
  questionCount: number;
}

export default function CategoryCard({ label, selected, onClick, questionCount }: Props) {
  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <div className={styles.label}>{label}</div>
      <div className={styles.count}>{questionCount} questions</div>
    </div>
  );
}