'use client';

import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isSelected?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ onClick, children, isSelected = false, className = '', type = 'button' }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge('rounded px-3 py-1', isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200', className)}
    >
      {children}
    </button>
  );
};

export default Button;
