// 각 페이지에서 사용되는 버튼 //
// components/button.jsx
import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'primary', 
  disabled = false,
  className = ''
}) => {
  // 버튼 타입별 스타일 매핑
  const styles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        py-4 
        px-6 
        rounded-lg 
        font-bold 
        transition-colors 
        duration-200
        ${styles[type]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;