import { useMemo, useState } from 'react';
import { Button, Card, Space, Typography } from 'antd';
import { questions as allQuestions } from '../data/questions';
import { shuffle } from '../utils/shuffle';

const { Title } = Typography;

const getButtonStyle = (text: string, colorMode?: boolean) => {
  if (!colorMode) return {};
  const colorMap: Record<string, string> = {
    Red: 'red',
    Blue: 'blue',
    Green: 'green',
    Yellow: 'gold',
    White: '#eee',
    Black: '#333',
  };
  return { backgroundColor: colorMap[text], color: text === 'White' ? 'black' : 'white' };
};

export default function Quiz() {
  const shuffled = useMemo(() => shuffle(allQuestions), []);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [wasAnswered, setWasAnswered] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const question = shuffled[index];

  const handleAnswer = (answer: string) => {
		if (wasAnswered) return;
    setWasAnswered(true);
    setSelected(answer);
    if (answer === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const next = () => {
    setWasAnswered(false);
    setSelected(null);
    setIndex((prev) => prev + 1)
  };

  return (
    <Card>
      <Title level={3}>Score: {score} / 20</Title>
      <Title level={4}>{index + 1}. {question.question}</Title>
      <Space direction="vertical" size="middle">
        {question.options.map((option) => (
          <Button
            key={option}
            block
            size="large"
						style={{
							...getButtonStyle(option, question.colorOptions),
							width: '100%',
						}}
            disabled={wasAnswered}
            type={
						wasAnswered && option === question.correctAnswer
							? 'primary'
							: wasAnswered && option === selected
							? 'dashed'
							: 'default'
            }
            onClick={() => handleAnswer(option)}
          >
            {option}
          </Button>
        ))}
        {wasAnswered && (
          <Typography.Text type={selected === question.correctAnswer ? 'success' : 'danger'}>
            {selected === question.correctAnswer ? 'Correct!' : `Wrong! Correct answer: ${question.correctAnswer}`}
          </Typography.Text>
        )}
        {wasAnswered && index < shuffled.length && (
          <Button type="default" onClick={next}>
            Next
          </Button>
        )}
        {wasAnswered && index === (shuffled.length - 1) && (
          <Typography.Text strong>End of Quiz! Final Score: {score} / 20</Typography.Text>
        )}
      </Space>
    </Card>
  );
}
