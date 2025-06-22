import { Card, Button, Tooltip, Typography, Space } from 'antd';

interface CategoryCardProps {
  name: string;
  totalAvailable: number;
  onSelect: (selected: boolean) => void;
  isSelected: boolean;
  count: number;
  onCountChange: (count: number) => void;
  helpText?: string;  
}

export default function CategoryCard({
  name,
  helpText,
  totalAvailable,
  onSelect,
  isSelected,
  count,
  onCountChange,
}: CategoryCardProps) {
  const handleToggle = () => {
    onSelect(!isSelected);
  };

  const increment = () => {
    if (count < totalAvailable) {
      onCountChange(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      onCountChange(count - 1);
    }
  };

  return (
    <Card
      onClick={handleToggle}
      style={{
        border: isSelected ? '2px solid #1677ff' : '1px solid #d9d9d9',
        backgroundColor: isSelected ? '#e6f4ff' : 'white',
        cursor: 'pointer',
      }}
      hoverable
    >
      <Tooltip title={helpText}>
        <Typography.Title level={5} style={{ marginBottom: 8 }}>
          {name} ({count} / {totalAvailable})
        </Typography.Title>
      </Tooltip>

      <Space>
        <Button size="small" onClick={(e) => { e.stopPropagation(); decrement(); }}>-</Button>
        <Button size="small" onClick={(e) => { e.stopPropagation(); increment(); }}>+</Button>
      </Space>
    </Card>
  );
}
