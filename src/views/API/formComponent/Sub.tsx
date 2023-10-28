import React from 'react';

function Sub(props: { a: string }) {
  const { a } = props;
  return (
    <div>
      <p>这是孙组件{a}</p>
    </div>
  );
}

export default Sub;
