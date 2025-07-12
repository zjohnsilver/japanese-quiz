import CharacterTable from '@/src/components/CharacterTable';
import KanjiTable from '@/src/components/KanjiTable';
import { Divider } from 'antd';
import Head from 'next/head';

export default function CharactersPage() {
  return (
    <>
      <Head>
        <title>Japanese Characters - Hiragana, Katakana & Kanji 🇯🇵</title>
        <meta name="description" content="Learn Japanese characters with interactive tables for hiragana, katakana, and kanji" />
      </Head>
      
      <div style={{ padding: '0 24px' }}>
        <CharacterTable />
        
        <Divider style={{ margin: '48px 0' }} />
        
        <KanjiTable />
      </div>
    </>
  );
} 