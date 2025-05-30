import { Typography } from 'antd';
const { Title } = Typography;

interface QuestionTitleProps {
  index: number;
  total: number;
  text: string;
}

export default function QuestionTitle({ index, total, text }: QuestionTitleProps) {
  return <Title level={4}>{index + 1}. {text} ({index + 1}/{total})</Title>;
}
