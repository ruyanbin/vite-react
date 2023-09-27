import { ConfigProvider } from 'antd';
import { RouterView } from '@/router';

function App() {
  return (
    <ConfigProvider>
      <RouterView />
    </ConfigProvider>
  );
}

export default App;
