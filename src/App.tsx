import { RouterView } from '#p/index';

import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider>
      <RouterView />
    </ConfigProvider>
  );
}

export default App;
