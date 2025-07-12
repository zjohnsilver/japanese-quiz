export const lightTheme = {
  colors: {
    // Primary colors
    primary: '#1890ff',
    primaryHover: '#40a9ff',
    primaryActive: '#096dd9',
    
    // Background colors
    background: '#ffffff',
    backgroundSecondary: '#f5f5f5',
    backgroundTertiary: '#fafafa',
    
    // Text colors
    textPrimary: 'rgba(0, 0, 0, 0.85)',
    textSecondary: 'rgba(0, 0, 0, 0.65)',
    textTertiary: 'rgba(0, 0, 0, 0.45)',
    textDisabled: 'rgba(0, 0, 0, 0.25)',
    
    // Border colors
    border: '#d9d9d9',
    borderSecondary: '#f0f0f0',
    borderLight: '#e6e6e6',
    
    // Status colors
    success: '#52c41a',
    successBackground: '#e6ffe6',
    successBorder: '#2ecc71',
    successText: '#2c7a4f',
    
    error: '#ff4d4f',
    errorBackground: '#ffe6e6',
    errorBorder: '#e74c3c',
    errorText: '#a23333',
    
    warning: '#faad14',
    warningBackground: '#fff7e6',
    
    info: '#1890ff',
    infoBackground: '#e6f7ff',
    
    // Sidebar colors
    sidebarBackground: '#001529',
    sidebarText: '#ffffff',
    
    // Card colors
    cardBackground: '#ffffff',
    cardBorder: '#f0f0f0',
    
    // Interactive colors
    hover: '#f5f5f5',
    active: '#e6f7ff',
    
    // Category colors (for quiz categories)
    categoryColors: {
      hiragana: '#dda0dd',
      hiraganaDakuten: '#ba55d3',
      hiraganaYouon: '#4b0082',
      katakana: '#ff69b4',
      katakanaDakuten: '#ff1493',
      katakanaYouon: '#da70d6',
      katakanaForeignSounds: '#fa8072',
      foodVocabulary: '#ff6347',
      family: '#f08080',
      sentence: '#4682b4',
      colors: '#008080',
    }
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '16px',
  },
  
  fontSize: {
    xs: '12px',
    sm: '13px',
    md: '14px',
    lg: '16px',
    xl: '18px',
    xxl: '20px',
  },
  
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.04)',
    md: '0 2px 6px rgba(0, 0, 0, 0.04)',
    lg: '0 4px 12px rgba(0, 0, 0, 0.08)',
  }
};

export const darkTheme = {
  colors: {
    // Primary colors
    primary: '#1890ff',
    primaryHover: '#40a9ff',
    primaryActive: '#096dd9',
    
    // Background colors
    background: '#141414',
    backgroundSecondary: '#1f1f1f',
    backgroundTertiary: '#262626',
    
    // Text colors
    textPrimary: 'rgba(255, 255, 255, 0.85)',
    textSecondary: 'rgba(255, 255, 255, 0.65)',
    textTertiary: 'rgba(255, 255, 255, 0.45)',
    textDisabled: 'rgba(255, 255, 255, 0.25)',
    
    // Border colors
    border: '#434343',
    borderSecondary: '#303030',
    borderLight: '#4a4a4a',
    
    // Status colors
    success: '#52c41a',
    successBackground: '#162312',
    successBorder: '#274916',
    successText: '#95de64',
    
    error: '#ff4d4f',
    errorBackground: '#2a1215',
    errorBorder: '#58181c',
    errorText: '#ff7875',
    
    warning: '#faad14',
    warningBackground: '#2b1d11',
    
    info: '#1890ff',
    infoBackground: '#111b26',
    
    // Sidebar colors
    sidebarBackground: '#001529',
    sidebarText: '#ffffff',
    
    // Card colors
    cardBackground: '#1f1f1f',
    cardBorder: '#303030',
    
    // Interactive colors
    hover: '#262626',
    active: '#111b26',
    
    // Category colors (for quiz categories) - adjusted for dark mode
    categoryColors: {
      hiragana: '#c8a2c8',
      hiraganaDakuten: '#b19cd9',
      hiraganaYouon: '#9370db',
      katakana: '#ff91a4',
      katakanaDakuten: '#ff69b4',
      katakanaYouon: '#dda0dd',
      katakanaForeignSounds: '#ffa07a',
      foodVocabulary: '#ff7f50',
      family: '#f0a0a0',
      sentence: '#87ceeb',
      colors: '#20b2aa',
    }
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '16px',
  },
  
  fontSize: {
    xs: '12px',
    sm: '13px',
    md: '14px',
    lg: '16px',
    xl: '18px',
    xxl: '20px',
  },
  
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
    md: '0 2px 6px rgba(0, 0, 0, 0.2)',
    lg: '0 4px 12px rgba(0, 0, 0, 0.3)',
  }
};

export type Theme = typeof lightTheme;
export type ThemeMode = 'light' | 'dark';

export const themes: Record<ThemeMode, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};

// Ant Design theme configuration
export const getAntdTheme = (mode: ThemeMode) => ({
  token: {
    colorPrimary: themes[mode].colors.primary,
    colorBgBase: themes[mode].colors.background,
    colorTextBase: themes[mode].colors.textPrimary,
    colorBorder: themes[mode].colors.border,
    colorBgContainer: themes[mode].colors.cardBackground,
    borderRadius: parseInt(themes[mode].borderRadius.md),
    fontSize: parseInt(themes[mode].fontSize.md),
  },
  algorithm: mode === 'dark' ? 'darkAlgorithm' : 'defaultAlgorithm',
}); 