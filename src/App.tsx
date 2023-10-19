import { ConfigProvider } from 'antd';
import { RouterView } from '#p/index';

function App() {
  return (
    <ConfigProvider>
      <RouterView />
    </ConfigProvider>
  );
}

export default App;
