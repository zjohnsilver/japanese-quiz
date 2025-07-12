import 'antd/dist/reset.css';
import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout, Grid } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useState } from 'react';

import Sidebar from '@/src/components/Sidebar';
import MobileSidebar from '@/src/components/MobileSidebar/MobileSidebar';
import { QuizProvider } from '@/src/components/QuizContext';
import { QuizCategoryEnum, ModeEnum } from '../enums/questions';
import { AppConfig } from '@/src/config/app';

const { Sider, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

export default function MyApp({ Component, pageProps }: AppProps) {
  const [selectedCategories, setSelectedCategories] = useState<QuizCategoryEnum[]>([]);
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  return (
    <QuizProvider
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories}
      questionsCount={0}
      countMode={ModeEnum.TOTAL}
    >
      <Layout>
        {!isMobile ? (
          <Sider
            width={200}
            style={{
              height: '100vh',
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 100,
            }}
          >
            <div
              style={{
                height: 32,
                margin: 16,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
              }}
            >
              {AppConfig.defaultTitle}
            </div>
            <Sidebar />
          </Sider>
        ) : (
          <MobileSidebar />
        )}
        <Layout
          style={{
            marginLeft: !isMobile ? 0 : -75,
            paddingTop: isMobile ? 64 : 0,
            minHeight: '100vh',
          }}
        >
          <Content className="content-layout">
            <Component {...pageProps} />
          </Content>

          <Footer
            className="content-layout"
            style={{
              textAlign: 'center',
              fontSize: 13,
              color: '#999',
            }}
          >
            © John Silver {new Date().getFullYear()} — All rights reserved ·{' '}
            <a href="https://github.com/zjohnsilver" target="_blank" rel="noopener noreferrer">
              <GithubOutlined /> GitHub
            </a>
          </Footer>
        </Layout>
      </Layout>
    </QuizProvider>
  );
}
