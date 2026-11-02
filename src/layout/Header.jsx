import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5] w-full border-b border-[#EBE7DF] transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* 1. 로고 영역 */}
        <Link to="/" className="text-xl font-bold tracking-widest text-[#1B3B2B] uppercase">
          Smatcha London
        </Link>

        {/* 2. 데스크톱 내비게이션 (md: 이상에서만 보임, 모바일에선 숨김) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A4A4A]">
          <Link to="/" className="hover:text-[#1B3B2B] transition-colors">Home</Link>
          <Link to="/order" className="hover:text-[#1B3B2B] transition-colors">Menu</Link>
          <a href="#story" className="hover:text-[#1B3B2B] transition-colors">Our Story</a>
          <a href="#locations" className="hover:text-[#1B3B2B] transition-colors">Locations</a>
        </nav>

        {/* 데스크톱 우측 액션 버튼 (예: 장바구니 혹은 주문하기) */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/order" 
            className="bg-[#1B3B2B] text-white text-xs px-4 py-2 rounded-full font-medium hover:bg-[#2C5E45] transition-colors"
          >
            Order Now
          </Link>
        </div>
      </div>
    </header>
  );
}