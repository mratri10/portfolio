import React from 'react';

interface CardProps {
    className?: string;
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
    className = '',
    children,
    hoverEffect = true
}) => {
    return (
        <div
            className={`
        glass-card p-6 
        ${hoverEffect ? 'hover:scale-[1.02] hover:bg-dark-card/80 transition-all duration-300' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
};
