import { useState } from 'react';
import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined, HomeOutlined, ReadOutlined, ExperimentOutlined, TableOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import styles from './styles.module.css'
import { AppConfig } from '@/src/config/app';
import ThemeToggle from '@/src/components/ThemeToggle';

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const items = [
    { key: '/', label: 'Home', icon: <HomeOutlined /> },
    { key: '/characters', label: 'Characters', icon: <TableOutlined /> },
    { key: '/lessons', label: 'Lessons', icon: <ReadOutlined /> },
    { key: '/suggestions', label: 'Suggestions', icon: <ExperimentOutlined /> }
  ];

  const colorSidebarDark = '#001529'

  return (
    <>
      <div
        onClick={() => router.push('/')}
        style={{
          cursor: 'pointer',
          height: 64,
          background: colorSidebarDark,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 16px',
          color: 'white',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 101
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: 18 }}>{AppConfig.defaultTitle}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ThemeToggle size="small" />
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 24, color: 'white' }} />}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
          />
        </div>
      </div>

      <Drawer
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        title={AppConfig.defaultTitle}
        className={styles.mobileDrawer}
      >
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[router.pathname]}
          items={items}
          onClick={({ key }) => {
            router.push(key);
            setOpen(false);
          }}
        />
      </Drawer>
    </>
  );
}
