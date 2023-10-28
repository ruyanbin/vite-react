import React, { useState } from 'react';
import Children from './Children';
function Father() {
  const [state, setState] = useState('');
  const arg = '这是父组件传递给子组件的值';
  const change = (val: string) => {
    setState(val);
  };
  return (
    <div>
      <p>我是父组件</p>
      <p> 这是子组件传递给父组件的值：{state}</p>
      <Children name={arg} change={change}></Children>
    </div>
  );
}

export default Father;
