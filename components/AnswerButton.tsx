import { Button } from 'antd';
import React from 'react';

interface AnswerButtonProps {
  option: string;
  isCorrect: boolean;
  isSelected: boolean;
  disabled: boolean;
  onSelect: (opt: string) => void;
}

export default function AnswerButton({ option, isCorrect, isSelected, disabled, onSelect }: AnswerButtonProps) {
  let type: 'primary' | 'dashed' | 'default' = 'default';
  if (disabled) {
    if (isCorrect) type = 'primary';
    else if (isSelected) type = 'dashed';
  }
  return (
    <Button
      key={option}
      block
      size="large"
      disabled={disabled}
      type={type}
      style={{ marginBottom: 8 }}
      onClick={() => onSelect(option)}
    >
      {option}
    </Button>
  );
}
