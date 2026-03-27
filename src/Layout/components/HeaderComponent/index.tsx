import ThemeToggle from '#/Layout/components/HeaderComponent/HeaderLeft/ThemeToggle';
import CollapseComponent from '#/Layout/components/HeaderComponent/HeaderRight/Collapse.tsx';

import LoginStatus from './HeaderLeft/LoginStatus';
import Bread from './HeaderRight/Bread';

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
