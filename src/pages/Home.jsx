import DesktopHome from '../components/DesktopHome';
import MobileHome from '../components/MobileHome';
// src/pages/Home.jsx
export default function Home() {
    return (
      <>
        {/* 2. 데스크톱 내비게이션 (md: 이상에서만 보임, 모바일에선 숨김) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A4A4A]">
          <DesktopHome />
        </div>
        <div className="md:hidden flex flex-col gap-6">
          <MobileHome />
        </div>
      </>
    );
  }