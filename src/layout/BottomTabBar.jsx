import { Link, useLocation } from "react-router-dom";
import { Home, Coffee, MapPin, User } from "lucide-react";

export default function BottomTabBar() {
  const location = useLocation(); // 현재 경로 확인
  const isActive = (path) => location.pathname === path;

  // 활성/비활성 상태에 따른 텍스트 스타일 정의
  const getTabStyle = (path) => {
    return isActive(path)
      ? "bg-[#ECEAE3]/45 text-[#165D31] font-bold shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)]" // 선택된 탭 배경 및 글자
      : "text-[#8C8C8C] font-medium hover:text-[#4A4A4A]"; // 일반 탭
  };

  const getIconColor = (path) => {
    return isActive(path) ? "#165D31" : "#8C8C8C";
  };

  return (
    <nav
      aria-label="bottom navigation"
      className="fixed bottom-0 left-0 right-0 bg-white shrink-0 z-50 pb-2"
    >
      <div className="w-[95%] flex justify-around items-center bg-[#FBF9F5]/75 backdrop-blur-xl border border-[#EBE7DF]/80 shadow-[0_12px_35px_rgba(0,0,0,0.12)] rounded-full p-1 mx-auto">
        <Link
          to="/"
          aria-current={isActive("/") ? "page" : undefined}
          className={`flex-1 flex flex-col items-center py-2 text-xs rounded-full transition-all duration-200 ${getTabStyle("/")}`}
        >
          <Home
            className="w-5 h-5 mb-0.5"
            color={getIconColor("/")}
            strokeWidth={isActive("/") ? 2.5 : 1.8}
          />
          <span className="text-[11px]">Home</span>
        </Link>

        <Link
          to="/order"
          aria-current={isActive("/order") ? "page" : undefined}
          className={`flex-1 flex flex-col items-center py-2 text-xs rounded-full transition-all duration-200 ${getTabStyle("/order")}`}
        >
          <Coffee
            className="w-5 h-5 mb-0.5"
            color={getIconColor("/order")}
            strokeWidth={isActive("/order") ? 2.5 : 1.8}
          />
          <span className="text-[11px]">Order</span>
        </Link>

        <Link
          to="/locations"
          aria-current={isActive("/locations") ? "page" : undefined}
          className={`flex-1 flex flex-col items-center py-2 text-xs rounded-full transition-all duration-200 ${getTabStyle("/locations")}`}
        >
          <MapPin
            className="w-5 h-5 mb-0.5"
            color={getIconColor("/locations")}
            strokeWidth={isActive("/locations") ? 2.5 : 1.8}
          />
          <span className="text-[11px]">Stores</span>
        </Link>

        <Link
          to="/mypage"
          aria-current={isActive("/mypage") ? "page" : undefined}
          className={`flex-1 flex flex-col items-center py-2 text-xs rounded-full transition-all duration-200 ${getTabStyle("/mypage")}`}
        >
          <User
            className="w-5 h-5 mb-0.5"
            color={getIconColor("/mypage")}
            strokeWidth={isActive("/mypage") ? 2.5 : 1.8}
          />
          <span className="text-[11px]">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
