import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomTabBar from './BottomTabBar';

export default function MainLayout() {
  return (
    // min-h-screen: 최소 높이 꽉 채우기
    // bg-gray-50: PC에서 여백이 보일 때 깔끔한 배경색
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      
      {/* PC 전용 상단 네비게이션 (모바일에선 숨김)  */}
      <div className="hidden md:block w-full">
        <Header /> 
      </div>

      {/* 
        2. 메인 컨텐츠 영역:
            - w-full max-w-md md:max-w-4xl: 너비 설정
            - flex-1: 남은 공간(전체 높이 - 바텀바 높이)을 모두 차지함!
            - overflow-y-auto: 내용이 길어지면 내부에서 스크롤되도록 처리
            - pb-20 md:pb-0: 바텀바에 가리지 않도록 모바일에서만 하단 여백 확보
            - PC(md 이상): max-w-md 또는 max-w-4xl 등으로 최대 너비를 제한하고 그림자/테두리를 주어 웹앱 느낌을 살릴 수도 있음
      */}
      <main className="min-h-screen w-full max-w-md md:max-w-4xl bg-white pb-20 md:pb-0">
        <Outlet /> 
      </main>

      {/* 모바일 하단 탭 바 (PC 화면 md 이상에서는 숨김) */}
      {/* <div className="md:hidden w-full max-w-md flex-shrink-0"> */}
        <BottomTabBar />
      {/* </div> */}

    </div>
  );
}