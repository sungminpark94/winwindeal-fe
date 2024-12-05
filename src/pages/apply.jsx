// pages/Apply.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import Alert from '../components/Alert';

const Apply = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        price: '',
        region: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const regions = [
        "서울", "경기", "인천", "대전", "대구", "부산", "광주", "울산", "세종"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError('');
    };

    const handleSubmit = () => {
        if (!formData.price || !formData.region) {
            setError('모든 항목을 입력해주세요.');
            return;
        }
        setIsSubmitted(true);
    };

    // 완료 화면 컴포넌트
    const SuccessScreen = () => (
        <div className="flex flex-col items-center justify-center h-full px-4 text-center">
            <div className="mb-8">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold mb-2">접수가 완료되었습니다!</h2>
                <p className="text-gray-600 mb-4">
                    영업일 기준 24시간 내에 연락드리겠습니다.
                </p>
                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                    <p className="font-medium mb-2">접수 내역</p>
                    <p className="text-gray-700">희망 가격: {Number(formData.price).toLocaleString()}원</p>
                    <p className="text-gray-700">방문 희망 지역: {formData.region}</p>
                </div>
            </div>
            <Button 
                onClick={() => navigate('/')}
                className="w-full max-w-sm"
            >
                홈으로 돌아가기
            </Button>
        </div>
    );

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            
            {/* iOS 상단 safe area */}
            <div className="h-14" />
            
            <main className="flex-1 px-4 pt-6">
                {!isSubmitted ? (
                    <div className="max-w-md mx-auto">
                        <h1 className="text-xl font-bold mb-6">
                            차량 매입 신청
                        </h1>

                        {/* 입력 폼 */}
                        <div className="space-y-6 mb-8">
                            {/* 가격 입력 */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    차량 가격 설정
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="희망 가격을 입력해주세요"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* 지역 선택 */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    방문 희망 지역
                                </label>
                                <select
                                    name="region"
                                    value={formData.region}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">지역을 선택해주세요</option>
                                    {regions.map(region => (
                                        <option key={region} value={region}>{region}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* 에러 메시지 */}
                        {error && (
                            <Alert 
                                type="warning"
                                message={error}
                                className="mb-4"
                            />
                        )}

                        {/* 신청 버튼 */}
                        <Button 
                            onClick={handleSubmit}
                            className="w-full mb-6"
                        >
                            접수하기
                        </Button>
                    </div>
                ) : (
                    <SuccessScreen />
                )}

                {/* iOS 하단 safe area */}
                <div className="h-20" />
            </main>

            <Navigation />
        </div>
    );
};

export default Apply;