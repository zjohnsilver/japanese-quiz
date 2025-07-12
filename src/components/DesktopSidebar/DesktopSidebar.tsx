import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import { ReadOutlined, ExperimentOutlined, HomeOutlined, TableOutlined } from '@ant-design/icons';
import { AppConfig } from '@/src/config/app';
import ThemeToggle from '@/src/components/ThemeToggle';
import styles from './styles.module.css';

const { Sider } = Layout;

interface DesktopSidebarProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

export default function DesktopSidebar({ collapsed, setCollapsed }: DesktopSidebarProps) {
  const router = useRouter();

  const menuItems = [
    {
      key: "/", 
      icon: <HomeOutlined />,
      label: 'Home'
    },
    {
      key: "/characters", 
      icon: <TableOutlined />,
      label: 'Characters'
    },
    {
      key: "/lessons", 
      icon: <ReadOutlined />,
      label: 'Lessons'
    },
    {
      key: "/suggestions", 
      icon: <ExperimentOutlined />,
      label: 'Suggestions'
    }    
  ];

  return (
    <Sider
      width={200}
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      style={{
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'space-between',
          fontWeight: 'bold',
          fontSize: collapsed ? 25 : 18,
          color: 'white',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          padding: collapsed ? 0 : '0 16px',
        }}
      >
        <span>{collapsed ? AppConfig.collapsedTitle : AppConfig.defaultTitle}</span>
        {!collapsed && <ThemeToggle size="small" />}
      </div>

      <div style={{ flex: 1, overflow: 'auto' }}>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[router.pathname]}
          className={styles.menu}
          items={menuItems}
          onClick={({ key }) => router.push(key)}
        />
      </div>
      
      {collapsed && (
        <div style={{ padding: '16px', textAlign: 'center' }}>
          <ThemeToggle size="small" />
        </div>
      )}
    </Sider>
  );
}
