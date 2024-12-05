// pages/Home.jsx
import React, { useState } from 'react';
import Alert from '../components/Alert';
import Button from '../components/Button';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Home = () => {
    const [carNumber, setCarNumber] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleCarNumberChange = (e) => {
        setCarNumber(e.target.value);
        if (showAlert) setShowAlert(false);
    };

    const handleSubmit = () => {
        if (!carNumber.trim()) {
            setShowAlert(true);
            return;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            
            {/* iOS 상단 safe area 대응 */}
            <div className="h-14" />
            
            <main className="flex-1 px-4 overflow-y-auto">
                {/* 타이틀 섹션 */}
                <div className="mt-4 mb-6">
                    <h1 className="text-xl font-bold mb-1">내 차번호 입력하고</h1>
                    <h2 className="text-xl font-bold">
                        <span className="text-blue-600">딜러 정군 매입가</span> 조회하기
                    </h2>
                </div>

                {/* 차량번호 입력 섹션 */}
                <div className="mb-4">
                    <input
                        type="text"
                        value={carNumber}
                        onChange={handleCarNumberChange}
                        placeholder="09마 1234"
                        className="w-full p-3 bg-gray-200 rounded-lg text-base"
                    />
                </div>

                {/* 경고 메시지 */}
                {showAlert && (
                    <Alert 
                        type="warning"
                        message="차량 번호를 입력해주세요."
                    />
                )}

                {/* 조회 버튼 */}
                <Button 
                    onClick={handleSubmit}
                    className="w-full mb-6"
                >
                    평균 매입가 조회하기
                </Button>

                {/* 스토리 섹션 */}
                <div className="mb-6 text-sm">
                    <div className="mb-4">
                        <p className="text-base mb-1">"소중히 관리하던 내 차를 [그 가격]에 넘기려고 하시는 건 아니죠?"</p>
                        <p className="text-xs text-gray-600">실제 지인 사례</p>
                    </div>
                    
                    <div className="space-y-3 text-gray-700">
                        <p>"온라인에서 1,450 견적 받았는데, 현장에서 100을 깎더라고요"</p>
                        <p>"갑자기 1,350만 원에 팔자니 아깝고, 혼자 직거래하자니 차량 상태 물어보는 것도 부담되고 네고 요청도 부담스러워…"</p>
                        <p>"혹시 너가 도와줄 수 있어?"</p>
                        <p>"그 때 제가 도움을 줬고 1,490만원 판매 성공했어요."</p>
                        <p>"단 2주 만에 140만 원의 차익을 만들었죠"</p>
                    </div>
                </div>

                {/* 서비스 설명 섹션 */}
                <div className="bg-white rounded-lg p-4 mb-6 shadow-sm text-sm">
                    <h3 className="text-lg font-bold mb-4">윈윈딜이 대신합니다</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-blue-600 mb-2">✅ 전문가의 정직한 검수</h4>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>차량 상태는 전문가가 직접 점검</li>
                                <li>150가지 체크리스트로 꼼꼼한 상태 확인</li>
                                <li>실제 주행 테스트 진행</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-600 mb-2">✅ 번거로움 제로!</h4>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>사진 촬영부터 판매글 등록까지</li>
                                <li>점검 결과를 바탕으로 모든 문의 응대</li>
                                <li>전문가가 가격 협상 대행</li>
                                <li>귀찮은 일정 조율 후 약속 주선</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-600 mb-2">✅ 최적가 보장</h4>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>실거래가 데이터 기반 가격 책정</li>
                                <li>시세 분석으로 최적의 판매가 도출</li>
                                <li>딜러 매입가 대비 평균 180만원 이상 추가 수익</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 판매 절차 */}
                <div className="mb-6 text-sm">
                    <h3 className="text-lg font-bold mb-3">윈윈딜 판매 절차</h3>
                    <ol className="list-decimal pl-4 space-y-1">
                        <li>점검 예약 신청</li>
                        <li>전문가 점검 및 매물 등록 대행</li>
                        <li>모든 상담 윈윈딜이 대행</li>
                        <li>구매자 매칭 & 명의이전</li>
                    </ol>
                </div>

                {/* 하단 조회 버튼 */}
                <Button 
                    onClick={handleSubmit}
                    className="w-full mb-6"
                >
                    평균 매입가 조회하기
                </Button>

                {/* iOS 하단 safe area 대응 */}
                <div className="h-20" />
            </main>

            <Navigation />
        </div>
    );
};

export default Home;