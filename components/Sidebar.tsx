import { Menu } from 'antd';
import { useRouter } from 'next/router';
import {
  ReadOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

export default function Sidebar() {
  const router = useRouter();

  const menuItems = [
    {
      key: "/", 
      icon: <ReadOutlined />,
      label: 'Lesson'
    },
    {
      key: "/quiz", 
      icon: <QuestionCircleOutlined />,
      label: 'Quiz'
    }    
  ];

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[router.pathname]}
      style={{ height: '100%', borderRight: 0 }}
      items={menuItems}
      onClick={({ key }) => router.push(key)}
    />
  );
}