// components/navigation.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', path: '/', label: '홈' },
    { id: 'sell', path: '/sell', label: '내차팔기'},
    { id: 'buy', path: '/buy', label: '내차사기'},
    { id: 'price', path: '/search', label: '시세보기'}
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
      <div className="flex justify-between items-center h-16">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`
              flex-1 flex flex-col items-center justify-center
              ${location.pathname === item.path ? 'text-blue-600' : 'text-gray-500'}
            `}
          >
            <span className="material-icons text-2xl">{item.icon}</span>
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;