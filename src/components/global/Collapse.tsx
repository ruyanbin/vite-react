import { Icon } from '@iconify/react';

import { useGlobalStore } from '#/store/global';

export default function CollapseComponent() {
  const status = useGlobalStore((state) => state.collapsed);
  const updateCollapsed = useGlobalStore((state) => state.updateCollapsed);
  const onCollapsed = () => {
    updateCollapsed(!status);
  };
  return (
    <div onClick={onCollapsed}>
      {status ? (
        <Icon icon='ant-design:menu-unfold-outlined' className='text-gray-700 dark:text-gray-200' />
      ) : (
        <Icon icon='ant-design:menu-fold-outlined' className='text-gray-700 dark:text-gray-200' />
      )}
    </div>
  );
}
