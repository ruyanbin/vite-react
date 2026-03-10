import ThemeToggle from '#/Layout/components/HeaderComponent/HeaderLeft/ThemeToggle';
import CollapseComponent from '#/components/global/Collapse';

import BreadcrumbComponent from './Breadcrumb';
import LoginStatus from './HeaderLeft/LoginStatus';

export default function LayoutHeader() {
  return (
    <div className='h-14 px-4 flex items-center justify-between  header-style'>
      <div className='flex items-center gap-2'>
        <CollapseComponent />
        <BreadcrumbComponent />
      </div>
      <div className='flex items-center gap-2'>
        <ThemeToggle />
        <LoginStatus />
      </div>
    </div>
  );
}
