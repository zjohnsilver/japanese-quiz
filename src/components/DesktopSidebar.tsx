import { Layout } from 'antd';
import { AppConfig } from '@/src/config/app';
import Sidebar from '@/src/components/Sidebar';

const { Sider } = Layout;

interface DesktopSidebarProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

export default function DesktopSidebar({ collapsed, setCollapsed }: DesktopSidebarProps) {
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
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: collapsed ? 25 : 18,
          color: 'white',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        {collapsed ? AppConfig.collapsedTitle : AppConfig.defaultTitle}
      </div>

      <div style={{ flex: 1, overflow: 'auto' }}>
        <Sidebar />
      </div>
    </Sider>
  );
}
