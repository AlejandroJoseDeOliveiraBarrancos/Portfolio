import React from 'react';
import './Container.css';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className = '',
}) => {
  const baseClasses = 'container';
  const sizeClasses = `container--${size}`;

  const classes = `${baseClasses} ${sizeClasses} ${className}`.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
