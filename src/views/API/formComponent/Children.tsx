import React from 'react';
import Sub from './Sub';
import { Button } from 'antd';
function Children(props) {
  const { name, change } = props;
  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    change('11111111111');
  };
  return (
    <div>
      <p>这是子组件</p>
      <p>这是父组件传递给子组件的值----{name}</p>
      <Button onClick={handleClick}>传递给父组件</Button>
      <Sub a={name}></Sub>
    </div>
  );
}

export default Children;
