import CollapseComponent from '#/components/global/Collapse';
import ThemeToggle from '#/components/global/ThemeToggle';

export default function LayoutHeader() {
  return (
    <div className='h-10 px-4 flex items-center justify-between  border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300'>
      <CollapseComponent />
      <ThemeToggle />
    </div>
  );
}
