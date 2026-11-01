import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomTabBar from './BottomTabBar';

export default function MainLayout() {
  return (
    // min-h-screen: 최소 높이 꽉 채우기
    // bg-gray-50: PC에서 여백이 보일 때 깔끔한 배경색
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      
      {/* PC 전용 상단 네비게이션 (모바일에선 숨김) >> 고민 중 */}
      {/* <div className="hidden md:block w-full"> */}
        {/* PC용 헤더 컴포넌트를 따로 두거나 기존 Header에 반응형 적용 */}
        <Header /> 
      {/* </div> */}

      {/* 
        핵심 포인트: 
        - 모바일(기본): w-full (화면 꽉 채움)
        - PC(md 이상): max-w-md 또는 max-w-4xl 등으로 최대 너비를 제한하고 그림자/테두리를 주어 웹앱 느낌을 살릴 수도 있음
      */}
      <main className="w-full max-w-md md:max-w-4xl flex-1 bg-white shadow-sm pb-20 md:pb-0">
        <Outlet /> 
      </main>

      {/* 모바일 하단 탭 바 (PC 화면 md 이상에서는 숨김) */}
      <div className="md:hidden">
        <BottomTabBar />
      </div>

    </div>
  );
}