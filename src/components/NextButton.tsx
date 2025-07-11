import { Button } from 'antd';
import React from 'react';

interface NextButtonProps {
  isLast: boolean;
  onNext: () => void;
}

export default function NextButton({ isLast, onNext }: NextButtonProps) {
  if (isLast) return null;
  return (
    <Button
      type="primary"
      onClick={onNext}
      style={{ marginTop: 24 }}
      block
    >
      Next
    </Button>
  );
}
