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
      onClick={() => onSelect(option)}
      style={{
        marginBottom: 12,
        whiteSpace: 'normal',
        wordBreak: 'break-word',
        textAlign: 'center',
        lineHeight: '1.6',
        fontSize: 16,
        paddingTop: 26,
        paddingBottom: 26,
      }}
    >
      {option}
    </Button>
  );
}
