// 사용자 입력 가능 필드 //

// components/input.jsx
import React from 'react';

const Input = ({ 
  value, 
  onChange, 
  placeholder, 
  type = 'text',
  className = '',
  disabled = false
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`
        w-full
        p-4
        bg-gray-200
        rounded-lg
        text-lg
        placeholder-gray-500
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        disabled:opacity-50
        ${className}
      `}
    />
  );
};

export default Input;