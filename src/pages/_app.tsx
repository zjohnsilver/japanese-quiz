import '../styles/globals.css';
import 'antd/dist/reset.css';
import type { AppProps } from 'next/app';
import { Layout } from 'antd';
import Sidebar from '@/src/components/Sidebar';
import { QuizProvider }  from '@/src/components/QuizContext'
import { useState } from 'react';
import { QuizCategoryEnum, ModeEnum } from '../enums/questions';
import { GithubOutlined } from '@ant-design/icons';


const { Sider, Content } = Layout;

export default function MyApp({ Component, pageProps }: AppProps) {
  const [selectedCategories, setSelectedCategories] = useState<QuizCategoryEnum[]>([]);

  return (
    <QuizProvider
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories}
      questionsCount={0}
      countMode={ModeEnum.TOTAL}
    >
      <Layout style={{}}>
        <Sider
          width={200}
          breakpoint="lg"
          style={{
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 100,
          }}
        >
          <div style={{ height: 32, margin: 16, color: 'white', fontWeight: 'bold' }}>
            Nihongo App
          </div>
          <Sidebar/>
        </Sider>
        <Layout>
          <Content className='content-layout'>
            <Component {...pageProps} />
          </Content>

          <Layout.Footer className="content-layout" style={{ textAlign: 'center', fontSize: 13, color: '#999' }}>
            © John Silver {new Date().getFullYear()} — All rights reserved·{' '}
            <a href="https://github.com/zjohnsilver" target="_blank" rel="noopener noreferrer">
              <GithubOutlined /> GitHub
            </a>
          </Layout.Footer>          
        </Layout>
      </Layout>
    </QuizProvider>
  );
}