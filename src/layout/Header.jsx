import { useLocation } from "react-router-dom";
import { Leaf, CupSoda, Search } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  // 경로에 따라 헤더에 표시할 타이틀 결정
  const getPageTitle = () => {
    switch (path) {
      // case "/":
      //   return "Smatcha London"; // 홈일 때는 로고 (혹은 브랜드명)
      case "/order":
        return "Order";
      case "/locations":
        return "Our stores";
      case "/mypage":
        return "Account";
      default:
        return "Smatcha London";
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5] backdrop-blur-md w-full  py-5 px-6">
      {path == "/" && (
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col text-[#1B3B2B]">
            <span className="text-sm font-medium tracking-wide">Hi,</span>
            <span className="text-2xl font-bold tracking-tight">username</span>
          </div>
          <div
            aria-label="4 stamps collected, 1 free drink coupon available"
            className="flex items-center bg-white px-3 py-2 rounded-full border border-[#EBE7DF] shadow-sm"
          >
            <p className="flex items-center gap-1.5 pr-4 mr-4 border-r border-[#EBE7DF]">
              <Leaf className="w-5 h-5 text-[#165D31]" strokeWidth="2.5" />
              <span className="text-xl font-bold text-[#165D31]">4</span>
              <span className="text-[#8C8C8C] font-medium">/ 10</span>
            </p>
            <p className="flex items-center gap-2 pr-3 text-[#165D31]">
              <CupSoda className="w-6 h-6 text-[#165D31]" strokeWidth="2.5" />
              <span className="text-lg font-bold">1</span>
            </p>
          </div>
        </div>
      )}
      {path !== "/" && (
        <div className="w-full flex items-center justify-between text-lg font-bold tracking-widest text-[#1B3B2B] uppercase">
          <span>{getPageTitle()}</span>
          {path == "/order" && <Search className="w-6 h-6 text-[#8C8C8C]" />}
        </div>
      )}
    </header>
  );
}
