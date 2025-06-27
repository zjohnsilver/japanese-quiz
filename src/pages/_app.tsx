import '../styles/globals.css';
import 'antd/dist/reset.css';
import type { AppProps } from 'next/app';
import { Layout } from 'antd';
import Sidebar from '@/src/components/Sidebar';
import { QuizProvider }  from '@/src/components/QuizContext'
import { useState } from 'react';
import { QuizCategoryEnum } from '../enums/questions';

const { Sider, Content } = Layout;

export default function MyApp({ Component, pageProps }: AppProps) {
  const [selectedCategories, setSelectedCategories] = useState<QuizCategoryEnum[]>([]);

  return (
    <QuizProvider
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={200} breakpoint="lg">
          <div style={{ height: 32, margin: 16, color: 'white', fontWeight: 'bold' }}>
            Nihongo App
          </div>
          <Sidebar />
        </Sider>
        <Layout>
          <Content style={{ margin: '24px' }}>
            <Component {...pageProps} />
          </Content>
        </Layout>
      </Layout>
    </QuizProvider>
  );
}