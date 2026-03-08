import { RouterView } from '#p/index';

import { ConfigProvider, theme } from 'antd';

import { useThemeStore } from '#/store/theme';

function App() {
  const themeMode = useThemeStore((state) => state.theme);

  const antdTheme = {
    token: {
      colorPrimary: '#1890ff',
      colorBgLayout: themeMode === 'light' ? '#ffffff' : '#141414',
      colorTextBase: themeMode === 'light' ? '#000000' : '#ffffff',
    },
    algorithm: themeMode === 'light' ? undefined : theme.darkAlgorithm,
  };

  return (
    <ConfigProvider theme={antdTheme}>
      <RouterView />
    </ConfigProvider>
  );
}

export default App;
