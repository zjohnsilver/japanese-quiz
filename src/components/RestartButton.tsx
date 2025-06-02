import { Button } from 'antd';
import React from 'react';

interface RestartButtonProps {
  onClick: () => void;
}

export default function RestartButton({ onClick }: RestartButtonProps) {
  return (
    <Button type="primary" onClick={onClick} style={{ marginTop: 12 }}>
      Restart Quiz
    </Button>
  );
}
