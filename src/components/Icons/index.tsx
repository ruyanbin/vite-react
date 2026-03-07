import { Icon } from '@iconify/react';

const IconContainer = (props: { name: string }) => {
  const { name } = props;

  return <Icon icon={`ant-design:${name}`} />;
};

export default IconContainer;
