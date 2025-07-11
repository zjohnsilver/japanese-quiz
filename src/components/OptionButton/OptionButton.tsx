import { Button } from 'antd';
import React from 'react';
import styles from './styles.module.css';

interface OptionButtonProps {
  option: string;
  isSelected: boolean;
  correctAnswer: string;
  wasAnswered: boolean;
  onSelect: (opt: string) => void;
}

export default function OptionButton({ option, isSelected, correctAnswer, wasAnswered, onSelect }: OptionButtonProps) {
  let type: 'primary' | 'dashed' | 'default' = 'default';
  let className = styles.optionButton;


  const isCorrect = option === correctAnswer;

  let disabled = false;
  if (wasAnswered){
    disabled = true;
    if (isCorrect) className += ' ' + styles.correct;
    else if (isSelected) className += ' ' + styles.incorrect;
  }
  else {
    className += ' ' + styles.hoverable;
  }

  return (
    <Button
      className={className}
      key={option}
      size="large"
      disabled={disabled}
      type={type}
      onClick={() => onSelect(option)}
    >
      {option}
    </Button>
  );
}
