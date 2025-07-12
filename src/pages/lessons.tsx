import { Card, Typography, Button, Space, Row, Col } from 'antd';
import { BookOutlined, TableOutlined, ReadOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import Head from 'next/head';

const { Title } = Typography;

export default function LessonsPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Japanese Lessons 🇯🇵📚</title>
        <meta name="description" content="Learn Japanese with comprehensive lessons and tutorials" />
      </Head>

      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '32px' }}>
          <BookOutlined style={{ marginRight: '8px' }} />
          Japanese Learning Lessons
        </Title>

        <Row gutter={[24, 24]} style={{ marginBottom: '32px' }}>
          <Col xs={24} md={12}>
            <Card
              hoverable
              style={{ height: '100%' }}
              cover={
                <div style={{ padding: '24px', textAlign: 'center', backgroundColor: 'var(--color-backgroundTertiary)' }}>
                  <TableOutlined style={{ fontSize: '48px', color: 'var(--color-primary)' }} />
                </div>
              }
              actions={[
                <Button 
                  key="characters" 
                  type="primary" 
                  icon={<TableOutlined />}
                  onClick={() => router.push('/characters')}
                >
                  View Character Tables
                </Button>
              ]}
            >
              <Card.Meta
                title="Character Tables"
                description="Interactive tables for hiragana and katakana characters with romaji pronunciation. Perfect for memorization and reference."
              />
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card
              hoverable
              style={{ height: '100%' }}
              cover={
                <div style={{ padding: '24px', textAlign: 'center', backgroundColor: 'var(--color-backgroundTertiary)' }}>
                  <ReadOutlined style={{ fontSize: '48px', color: 'var(--color-success)' }} />
                </div>
              }
              actions={[
                <Button 
                  key="tutorials" 
                  type="default" 
                  icon={<ReadOutlined />}
                  disabled
                >
                  Coming Soon
                </Button>
              ]}
            >
              <Card.Meta
                title="Interactive Tutorials"
                description="Step-by-step guided lessons for learning Japanese grammar, vocabulary, and writing systems."
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}