import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function HiraganaTeaching() {
  return (
    <Card>
      <Title level={3}>Hiragana Teaching</Title>
      <Paragraph>Here's the basic hiragana table (あ～ん):</Paragraph>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/28/Table_hiragana.svg"
        alt="Hiragana Chart"
        style={{ width: '100%', maxWidth: 600 }}
      />
      <Paragraph>Start by memorizing the vowels (あ い う え お) and go row by row!</Paragraph>
    </Card>
  );
}
