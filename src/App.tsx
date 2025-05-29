import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import HiraganaTeaching from './components/HiraganaTeaching';
import Quiz from './components/Quiz';
import { PageKeys, PageKey } from './enums';

const { Header, Content, Sider } = Layout;

function App() {
  const defaultPageKey = PageKeys.Quiz
  const [page, setPage] = useState<PageKey>(defaultPageKey);
  const menuItems = [
    {
      key:PageKeys.Teaching,
      icon: <AppstoreOutlined />,
      label: 'Hiragana Teaching'
    },
    {
      key:PageKeys.Quiz,
      icon: <AppstoreOutlined />,
      label: 'Quiz'
    }    
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider breakpoint="lg">
        <div style={{ height: 32, margin: 16, color: 'white', fontWeight: 'bold' }}>
          Nihongo App
        </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[defaultPageKey]}
        items={menuItems}
        onClick={(e) => setPage(e.key as PageKey)}
      />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', paddingLeft: 24, fontSize: 20 }}>
          {page === PageKeys.Quiz ? 'Japanese Quiz' : 'Learn Hiragana'}
        </Header>
        <Content style={{ margin: '24px', overflow: 'auto' }}>
          {page === PageKeys.Quiz ? <Quiz /> : <HiraganaTeaching />}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
