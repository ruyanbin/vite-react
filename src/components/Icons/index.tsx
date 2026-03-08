import { memo } from 'react';

import { Icon } from '@iconify/react';

interface IconContainerProps {
  name: string;
  size?: string | number;
  className?: string;
  color?: string;
  spin?: boolean;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  ariaLabel?: string;
}

const IconContainer = memo((props: IconContainerProps) => {
  const { name, size = '1em', className = '', color, spin = false, onClick, ariaLabel } = props;

  const baseClasses = `text-block cursor-pointer ${spin ? 'animate-spin' : ''} ${className}`;
  const finalClassName = color ? `${baseClasses} ${color}` : baseClasses;

  return (
    <span className={`inline-block ${finalClassName}`}>
      <Icon icon={name} width={size} height={size} className='w-full h-full' onClick={onClick} aria-label={ariaLabel} />
    </span>
  );
});

IconContainer.displayName = 'IconContainer';

export default IconContainer;
