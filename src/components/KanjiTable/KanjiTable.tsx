import React, { useState } from 'react';
import { Card, Typography, Tag, Space } from 'antd';
import styles from './styles.module.css';

const { Title, Text } = Typography;

export type KanjiData = {
  character: string;
  meaning: string[];
  onyomi: string[];  // Chinese reading
  kunyomi: string[]; // Japanese reading
  grade?: number;    // School grade level
  jlptLevel?: number;     // JLPT level
  frequency?: number; // Usage frequency rank
};

const sampleKanji: KanjiData[] = [
  {
    character: '人',
    meaning: ['person', 'human'],
    onyomi: ['ジン', 'ニン'],
    kunyomi: ['ひと'],
    grade: 1,
    jlptLevel: 5,
    frequency: 5
  },
  {
    character: '日',
    meaning: ['sun', 'day'],
    onyomi: ['ニチ', 'ジツ'],
    kunyomi: ['ひ', 'か'],
    grade: 1,
    jlptLevel: 5,
    frequency: 1
  },
  {
    character: '本',
    meaning: ['book', 'origin', 'main'],
    onyomi: ['ホン'],
    kunyomi: ['もと'],
    grade: 1,
    jlptLevel: 5,
    frequency: 10
  }
];

const KanjiTable = () => {
  const [selectedKanji, setSelectedKanji] = useState<KanjiData | null>(null);

  return (
    <div className={styles.container}>
      <Title level={2} className={styles.title}>
        Kanji Reference
      </Title>
      
      <div className={styles.content}>
        <div className={styles.kanjiGrid}>
          {sampleKanji.map((kanji, index) => (
            <Card
              key={`${kanji.character}-${index}`}
              className={`${styles.kanjiCard} ${selectedKanji?.character === kanji.character ? styles.selected : ''}`}
              hoverable
              onClick={() => setSelectedKanji(kanji)}
            >
              <div className={styles.kanjiCharacter}>{kanji.character}</div>
              <div className={styles.kanjiMeaning}>
                {kanji.meaning.slice(0, 2).join(', ')}
              </div>
            </Card>
          ))}
        </div>

        {selectedKanji && (
          <Card className={styles.detailCard} title={`Kanji Details: ${selectedKanji.character}`}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <Text strong>Meanings: </Text>
                {selectedKanji.meaning.map(meaning => (
                  <Tag key={meaning} color="blue">{meaning}</Tag>
                ))}
              </div>
              
              <div>
                <Text strong>On'yomi (Chinese reading): </Text>
                {selectedKanji.onyomi.map(reading => (
                  <Tag key={reading} color="red">{reading}</Tag>
                ))}
              </div>
              
              <div>
                <Text strong>Kun'yomi (Japanese reading): </Text>
                {selectedKanji.kunyomi.map(reading => (
                  <Tag key={reading} color="green">{reading}</Tag>
                ))}
              </div>
              
              {selectedKanji.grade && (
                <div>
                  <Text strong>School Grade: </Text>
                  <Tag color="purple">Grade {selectedKanji.grade}</Tag>
                </div>
              )}
              
              {selectedKanji.jlptLevel && (
                <div>
                  <Text strong>JLPT Level: </Text>
                  <Tag color="orange">N{selectedKanji.jlptLevel}</Tag>
                </div>
              )}
            </Space>
          </Card>
        )}
      </div>
      
      <div className={styles.comingSoon}>
        <Text type="secondary">
          🚧 This is a preview. Full kanji database coming soon!
        </Text>
      </div>
    </div>
  );
};

export default KanjiTable; 