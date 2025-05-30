import { Button } from 'antd';
import React from 'react';

interface NextButtonProps {
  isLast: boolean;
  onNext: () => void;
}

export default function NextButton({ isLast, onNext }: NextButtonProps) {
  if (isLast) return null;
  return (
    <Button type="default" onClick={onNext} style={{ marginTop: 16 }}>
      Next
    </Button>
  );
}
