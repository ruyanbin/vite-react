import React from 'react';
// import * as iconify from '@iconify/json';

const IconContainer = (props: { name: string }) => {
  const { name } = props;

  return <div className={name}></div>;
};

export default IconContainer;
