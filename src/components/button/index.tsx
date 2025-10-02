'use client';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isSelected?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ onClick, children, isSelected = false, className = '', type = 'button' }: ButtonProps) => {
  const baseClasses = 'rounded px-3 py-1';
  const selectedClasses = isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200';
  const combinedClasses = `${baseClasses} ${selectedClasses} ${className}`.trim();

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
