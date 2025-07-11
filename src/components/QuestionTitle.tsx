import { Typography } from 'antd';
const { Title } = Typography;

interface QuestionTitleProps {
  index: number;
  text: string;
}

export default function QuestionTitle({ index, text }: QuestionTitleProps) {
  return <Title level={4}>{index + 1}. {text}</Title>;
}
