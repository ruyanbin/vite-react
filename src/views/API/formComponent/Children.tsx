import { Button } from 'antd';

import Sub from './Sub';

function Children(props: { name: string; change: (value: string) => void }) {
  const { name, change } = props;
  const handleClick = () => {
    change('11111111111');
  };
  return (
    <div>
      <p>这是子组件</p>
      <p>这是父组件传递给子组件的值----{name}</p>
      <Button onClick={handleClick}>传递给父组件</Button>
      <Sub></Sub>
    </div>
  );
}
export default Children;
