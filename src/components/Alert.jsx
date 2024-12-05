// components/alert.jsx
import React from 'react';

const Alert = ({ type = 'warning', message }) => {
  // 타입별 스타일 매핑
  const styles = {
    warning: 'bg-rose-200 text-rose-800',
    success: 'bg-green-200 text-green-800',
    info: 'bg-blue-200 text-blue-800',
  };

  return (
    <div className={`rounded-lg p-4 mb-4 text-center ${styles[type]}`}>
      {message}
    </div>
  );
};

export default Alert;