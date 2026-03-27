import { useGlobalStore } from '#/store/global.ts';

import IconContainer from '#c/Icons';

export default function CollapseComponent() {
  const status = useGlobalStore((state) => state.collapsed);
  const updateCollapsed = useGlobalStore((state) => state.updateCollapsed);
  const onCollapsed = () => {
    updateCollapsed(!status);
  };
  return (
    <div className='cursor-pointer flex items-center justify-center' onClick={onCollapsed}>
      {status ? (
        <IconContainer name='ant-design:menu-unfold-outlined' />
      ) : (
        <IconContainer name='ant-design:menu-fold-outlined' />
      )}
    </div>
  );
}
