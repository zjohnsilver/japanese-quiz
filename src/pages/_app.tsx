import 'antd/dist/reset.css';
import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout, Grid, ConfigProvider, theme } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useState } from 'react';
import MobileSidebar from '@/src/components/MobileSidebar/MobileSidebar';
import { QuizProvider } from '@/src/components/QuizContext';
import { QuizCategoryEnum, ModeEnum } from '../enums/questions';
import DesktopSidebar from '../components/DesktopSidebar';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { getAntdTheme } from '../config/theme';

const { Content, Footer } = Layout;
const { useBreakpoint } = Grid;

const AppContent: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [selectedCategories, setSelectedCategories] = useState<QuizCategoryEnum[]>([]);
  const [collapsed, setCollapsed] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.lg;
  const { themeMode } = useTheme();

  return (
    <ConfigProvider
      theme={{
        ...getAntdTheme(themeMode),
        algorithm: themeMode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
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
                color: 'var(--color-textTertiary)',
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
    </ConfigProvider>
  );
};

export default function MyApp(props: AppProps) {
  return (
    <ThemeProvider>
      <AppContent {...props} />
    </ThemeProvider>
  );
}
