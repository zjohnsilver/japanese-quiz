import { Button } from 'antd';
import React from 'react';

interface RestartButtonProps {
  onClick: () => void;
}

export default function RestartButton({ onClick, ...rest }: RestartButtonProps) {
  return (
    <Button
      type="primary"
      onClick={onClick}
      style={{ marginTop: 24 }}
      block
      {...rest}
    >
      Restart Quiz
    </Button>
  );
}
