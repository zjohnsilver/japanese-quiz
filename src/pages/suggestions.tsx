import { Card, Typography, List, Tag } from 'antd';
import { BulbOutlined, GlobalOutlined, YoutubeOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const resources = [
  {
    category: '🌐 Websites',
    icon: <GlobalOutlined style={{ color: '#1890ff' }} />,
    color: '#e6f7ff',
    items: [
      {
        name: 'Japanese with Anime',
        url: 'https://www.japanesewithanime.com/',
        description: 'Explains grammar and vocabulary using real anime dialogue and screenshots.',
        tags: ['Grammar', 'Anime', 'Context'],
      },      
      {
        name: 'Tofugu',
        url: 'https://www.tofugu.com/learn-japanese/',
        description: 'Deep-dive articles on grammar, culture, and learning strategies.',
        tags: ['Grammar', 'Culture'],
      }
    ],
  },
  {
    category: '🎥 YouTube Channels',
    icon: <YoutubeOutlined style={{ color: '#f5222d' }} />,
    color: '#fff1f0',
    items: [
      {
        name: 'Japanese Ammo with Misa',
        url: 'https://www.youtube.com/@JapaneseAmmowithMisa',
        description: 'In-depth and friendly Japanese lessons focused on grammar, vocabulary, and natural usage, often explained through anime, daily conversation, and cultural context.',
        tags: ['Grammar', 'Vocabulary', 'Natural Japanese', 'Anime', 'Culture', 'Beginner Friendly', 'JLPT']
      }
    ],
  },
];

export default function SuggestionsPage() {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>
        <BulbOutlined style={{ color: '#faad14', marginRight: 8 }} />
        Learning Resources
      </Title>
      <Paragraph style={{ marginBottom: 32 }}>
        Here are some curated suggestions to help you learn Japanese more effectively.
      </Paragraph>

      {resources.map(({ category, icon, color, items }) => (
        <Card
          key={category}
          title={<span>{icon} <strong>{category}</strong></span>}
          style={{ backgroundColor: color, marginBottom: 24 }}
          bordered={false}
        >
          <List
            itemLayout="vertical"
            dataSource={items}
            renderItem={({ name, url, description, tags }) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontWeight: 500, color: '#1d39c4' }}
                    >
                      {name}
                    </a>
                  }
                  description={description}
                />
                {tags?.map(tag => (
                  <Tag key={tag} color="blue">
                    {tag}
                  </Tag>
                ))}
              </List.Item>
            )}
          />
        </Card>
      ))}
    </div>
  );
}
