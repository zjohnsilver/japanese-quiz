import { Button } from 'antd';
import React from 'react';
import styles from './styles.module.css';

interface AnswerButtonProps {
  option: string;
  isSelected: boolean;
  correctAnswer: string;
  wasAnswered: boolean;
  onSelect: (opt: string) => void;
}

export default function AnswerButton({ option, isSelected, correctAnswer, wasAnswered, onSelect }: AnswerButtonProps) {
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
