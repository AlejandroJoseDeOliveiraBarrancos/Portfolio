import React from 'react';
import './ProgressIndicator.css';

interface ProgressIndicatorProps {
  progress: number;
  className?: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  progress,
  className = ''
}) => {
  return (
    <div className={`progress-indicator ${className}`}>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressIndicator;
