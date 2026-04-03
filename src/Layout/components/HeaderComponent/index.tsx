import CollapseComponent from '#/Layout/components/HeaderComponent/HeaderLeft/Collapse.tsx';
import ThemeToggle from '#/Layout/components/HeaderComponent/HeaderRight/ThemeToggle.tsx';

import Bread from './HeaderLeft/Bread.tsx';
import LoginStatus from './HeaderRight/LoginStatus.tsx';

export default function LayoutHeader() {
  return (
    <div className='h-14 px-4 flex items-center justify-between  header-style'>
      <div className='flex items-center gap-2'>
        <CollapseComponent />
        <Bread />
      </div>
      <div className='flex items-center gap-2'>
        <ThemeToggle />
        <LoginStatus />
      </div>
    </div>
  );
}
