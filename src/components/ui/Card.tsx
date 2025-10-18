import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
}) => {
  const baseClasses = 'card';
  const variantClasses = `card--${variant}`;
  const clickableClasses = onClick ? 'card--clickable' : '';

  const classes = `${baseClasses} ${variantClasses} ${clickableClasses} ${className}`.trim();

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};
