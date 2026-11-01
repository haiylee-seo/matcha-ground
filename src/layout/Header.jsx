import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  // 모바일에서 햄버거 메뉴(사이드바/모달) 열림/닫힘 상태 관리 (나중에 분리하기 좋은 포인트)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* 3. 모바일 햄버거 메뉴 버튼 (md 이상에선 숨김) */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#1B3B2B] focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          {/* 햄버거 아이콘 또는 X 아이콘 전환 */}
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 4. 모바일 전용 드롭다운 / 풀스크린 메뉴 (햄버거 클릭 시 노출) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#FBF9F5] border-b border-[#EBE7DF] shadow-lg py-6 px-6 flex flex-col gap-4 animate-fadeIn">
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-[#1B3B2B] py-2 border-b border-[#EBE7DF]/50"
          >
            Home
          </Link>
          <Link 
            to="/order" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-[#1B3B2B] py-2 border-b border-[#EBE7DF]/50"
          >
            Menu
          </Link>
          <a 
            href="#story" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-[#4A4A4A] py-2 border-b border-[#EBE7DF]/50"
          >
            Our Story
          </a>
          <a 
            href="#locations" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-[#4A4A4A] py-2"
          >
            Locations
          </a>
          
          <Link 
            to="/order"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-[#1B3B2B] text-white text-center py-3 rounded-xl font-medium mt-2 shadow-sm"
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}