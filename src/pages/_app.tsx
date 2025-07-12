import 'antd/dist/reset.css';
import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout, Grid } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useState } from 'react';
import MobileSidebar from '@/src/components/MobileSidebar/MobileSidebar';
import { QuizProvider } from '@/src/components/QuizContext';
import { QuizCategoryEnum, ModeEnum } from '../enums/questions';
import DesktopSidebar from '../components/DesktopSidebar';

const { Content, Footer } = Layout;
const { useBreakpoint } = Grid;

export default function MyApp({ Component, pageProps }: AppProps) {
  const [selectedCategories, setSelectedCategories] = useState<QuizCategoryEnum[]>([]);
  const [collapsed, setCollapsed] = useState(false);
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
          <DesktopSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        ) : (
          <MobileSidebar />
        )}
        <Layout
          style={{
            marginLeft: !isMobile ? (collapsed ? -75 : 0) : -75,
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
