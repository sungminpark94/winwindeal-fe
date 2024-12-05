// pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Alert from '../components/Alert';

const Login = () => {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    // 전화번호 입력 처리
    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        // 숫자와 하이픈만 허용
        const formattedNumber = value.replace(/[^\d-]/g, '');
        setPhoneNumber(formattedNumber);
        setError('');
    };

    // 로그인 처리
    const handleLogin = () => {
        if (!phoneNumber) {
            setError('전화번호를 입력해주세요.');
            return;
        }
        
        // TODO: 실제 로그인 로직 구현
        navigate('/'); // 로그인 성공 시 홈으로 이동
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            
            {/* iOS 상단 safe area */}
            <div className="h-14" />
            
            <main className="flex-1 px-4 pt-8">
                {/* 로그인 컨테이너 */}
                <div className="max-w-md mx-auto">
                    <h1 className="text-2xl font-bold mb-8">로그인</h1>
                    
                    {/* 전화번호 입력 */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            전화번호
                        </label>
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            placeholder="010-0000-0000"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                        />
                    </div>

                    {/* 에러 메시지 */}
                    {error && (
                        <Alert 
                            type="warning"
                            message={error}
                            className="mb-4"
                        />
                    )}

                    {/* 로그인 버튼 */}
                    <Button 
                        onClick={handleLogin}
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
                    >
                        로그인
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default Login;