// pages/Search.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import Alert from '../components/Alert';

const Search = () => {
    // 상태 관리
    const [carInfo, setCarInfo] = useState({
        year: '',
        model: ''
    });
    const [isConfirmed, setIsConfirmed] = useState(false);

    // 샘플 데이터
    const priceHistory = [
        { year: '2023', month: '4월', price: '3,540만원' },
        { year: '2023', month: '3월', price: '3,480만원' },
        { year: '2023', month: '2월', price: '3,450만원' },
        { year: '2023', month: '1월', price: '3,340만원' }
    ];

    const handleSearch = () => {
        // 차량 정보 확인 후 상태 업데이트
        setIsConfirmed(true);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            
            {/* iOS 상단 safe area */}
            <div className="h-14" />
            
            <main className="flex-1 px-4 overflow-y-auto">
                {/* 검색 섹션 */}
                <div className="mt-4 mb-6">
                    <div className="mb-4">
                        <select 
                            className="w-full p-3 bg-white border rounded-lg mb-2"
                            value={carInfo.year}
                            onChange={(e) => setCarInfo({...carInfo, year: e.target.value})}
                        >
                            <option value="">차량 연식을 선택해주세요</option>
                            <option value="2023">2023년</option>
                            <option value="2022">2022년</option>
                            <option value="2021">2021년</option>
                        </select>
                        
                        <select 
                            className="w-full p-3 bg-white border rounded-lg"
                            value={carInfo.model}
                            onChange={(e) => setCarInfo({...carInfo, model: e.target.value})}
                        >
                            <option value="">차량 모델을 선택해주세요</option>
                            <option value="model1">모델1</option>
                            <option value="model2">모델2</option>
                            <option value="model3">모델3</option>
                        </select>
                    </div>

                    <Button onClick={handleSearch} className="w-full">
                        시세 체크하기
                    </Button>
                </div>

                {/* 확인 메시지 */}
                {isConfirmed && (
                    <Alert 
                        type="success"
                        message="차량 정보가 확인되었습니다"
                        className="mb-4"
                    />
                )}

                {/* 시세 정보 */}
                {isConfirmed && (
                    <>
                        {/* 연도별 시세 테이블 */}
                        <div className="bg-white rounded-lg p-4 mb-6">
                            <h3 className="text-lg font-bold mb-4">
                                소스에서 예상되는
                                <br />
                                1,140만 원의 이익
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="p-2 text-left">연도</th>
                                            <th className="p-2 text-left">월</th>
                                            <th className="p-2 text-right">시세</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {priceHistory.map((item, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="p-2">{item.year}</td>
                                                <td className="p-2">{item.month}</td>
                                                <td className="p-2 text-right">{item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4 text-right">
                                <p className="text-sm text-gray-500">평균 시세 400만원 기준</p>
                                <div className="text-xl font-bold text-blue-600">평균 200만원 더 높게!</div>
                            </div>
                        </div>

                        {/* 신청 버튼 */}
                        <Button 
                            onClick={() => {/* 신청 처리 */}}
                            className="w-full mb-6"
                        >
                            신청하기
                        </Button>
                    </>
                )}

                {/* iOS 하단 safe area */}
                <div className="h-20" />
            </main>

            <Navigation />
        </div>
    );
};

export default Search;