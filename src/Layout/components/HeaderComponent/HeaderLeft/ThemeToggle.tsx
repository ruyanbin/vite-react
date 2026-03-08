import { useEffect, useRef } from 'react';

import { Icon } from '@iconify/react';

import { useThemeStore } from '#/store/theme';

export default function ThemeToggle() {
  const { theme, toggleTheme, setIsAnimating } = useThemeStore();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    // 使用相对于视口的坐标，因为波纹元素是 fixed 定位
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    setIsAnimating(true);

    // 创建波纹效果
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: ${theme === 'light' ? '#1f1f1f' : '#ffffff'};
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9999;
      transition: all 0.6s ease-out;
    `;

    document.body.appendChild(ripple);

    // 强制重绘
    ripple.getBoundingClientRect();

    // 计算最大半径
    const maxRadius = Math.max(window.innerWidth, window.innerHeight) * 1.5;

    // 开始动画
    requestAnimationFrame(() => {
      ripple.style.width = `${maxRadius * 2}px`;
      ripple.style.height = `${maxRadius * 2}px`;
    });

    // 切换主题
    setTimeout(() => {
      toggleTheme();
    }, 150);

    // 清理
    setTimeout(() => {
      ripple.remove();
      setIsAnimating(false);
    }, 600);
  };

  // 应用主题到 document
  useEffect(() => {
    // document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      className='relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
      aria-label={theme === 'light' ? '切换到暗色主题' : '切换到亮色主题'}
    >
      <div className='relative w-6 h-6 overflow-hidden'>
        {/* 太阳图标 */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
          }`}
        >
          <Icon icon='ant-design:sun-filled' className='text-xl text-orange-500 dark:text-orange-400' />
        </div>

        {/* 月亮图标 */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
        >
          <Icon icon='ant-design:moon-filled' className='text-xl text-blue-400 dark:text-blue-300' />
        </div>
      </div>
    </button>
  );
}
