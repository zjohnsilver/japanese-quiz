import { Button } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './styles.module.css';

interface ThemeToggleProps {
  size?: 'small' | 'middle' | 'large';
  shape?: 'default' | 'circle' | 'round';
  showText?: boolean;
}

const ThemeToggle = ({ 
  size = 'middle', 
  shape = 'circle',
  showText = false 
}: ThemeToggleProps) => {
  const { themeMode, toggleTheme } = useTheme();
  
  const isDark = themeMode === 'dark';
  
  return (
    <Button
      type="text"
      size={size}
      shape={shape}
      icon={isDark ? <BulbFilled /> : <BulbOutlined />}
      onClick={toggleTheme}
      className={styles.themeToggle}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {showText && (isDark ? 'Light' : 'Dark')}
    </Button>
  );
};

export default ThemeToggle; 