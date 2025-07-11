import { Card, Space } from 'antd';
import QuestionTitle from '@/src/components/QuestionTitle';
import OptionButton from '@/src/components/OptionButton';
import NextButton from '@/src/components/NextButton';
import RestartButton from '@/src/components/RestartButton';
import QuizCardHeader from '@/src/components/QuizCardHeader';
import FinalFeedback from '@/src/components/FinalFeedback';

type QuizCardProps = {
  score: number;
  index: number;
  total: number;
  question: {
    question: string;
    options: string[];
    answer: string;
  };
  selected: string | null;  
  wasAnswered: boolean;
  isLast: boolean;
  handleAnswer: (option: string) => void;
  handleNext: () => void;
  handleRestart: () => void;
};

const QuizCard = ({
  score,
  index,
  total,
  question,
  selected,
  wasAnswered,
  isLast,
  handleAnswer,
  handleNext,
  handleRestart,
}: QuizCardProps) => (
  <Card 
    title={
      <QuizCardHeader score={score} index={index} total={total} />
    }
    style={{ maxWidth: 400, margin: 'auto' }}
  >
    <QuestionTitle index={index} text={question.question} />
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Space direction="vertical" size="middle" style={{ width: '100%'}}>
        {question.options.map((opt) => (
          <OptionButton
            key={opt}
            option={opt}
            isSelected={opt === selected}          
            answer={question.answer}
            wasAnswered={wasAnswered}
            onSelect={handleAnswer}
          />
        ))}
        {wasAnswered && (
          <>
            {!isLast && <NextButton isLast={isLast} onNext={handleNext} />}
            {isLast && (
              <>
                <FinalFeedback score={score} total={total} />
                <RestartButton onClick={handleRestart} />
              </>
            )}
          </>
        )}
      </Space>
    </div>
  </Card>
);

export default QuizCard;
