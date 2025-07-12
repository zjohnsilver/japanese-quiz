import { Menu } from 'antd';
import { useRouter } from 'next/router';
import {
  ReadOutlined,
  BulbOutlined,
  HomeOutlined
} from '@ant-design/icons';
import styles from './styles.module.css'

export default function Sidebar() {
  const router = useRouter();

  const menuItems = [
    {
      key: "/", 
      icon: <HomeOutlined />,
      label: 'Home'
    },
    {
      key: "/lessons", 
      icon: <ReadOutlined />,
      label: 'Lesson'
    },
    {
      key: "/suggestions", 
      icon: <BulbOutlined />,
      label: 'Suggestions'
    }    
  ];

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[router.pathname]}
      className={styles.sideBar}
      items={menuItems}
      onClick={({ key }) => router.push(key)}
    />
  );
}