import { Link, useLocation } from 'react-router-dom';
import { Home, Coffee, MapPin, User } from 'lucide-react'; // 👈 혜택(Gift) 대신 매장(MapPin) 아이콘 추가

export default function BottomTabBar() {
  const location = useLocation(); // 현재 경로 확인
  const isActive = (path) => location.pathname === path;

  // 활성/비활성 상태에 따른 텍스트 스타일 정의
  const getTabStyle = (path) => {
    return isActive(path) 
      ? 'text-[#1B3B2B] font-bold' 
      : 'text-[#8C8C8C] font-medium hover:text-[#4A4A4A]';
  };

  const getIconColor = (path) => {
    return isActive(path) ? '#1B3B2B' : '#8C8C8C';
  };

  return (
    <nav className="md:hidden fixed bottom-0 w-full max-w-md flex-shrink-0 bg-[#FBF9F5] border-t border-[#EBE7DF] py-2 px-4 flex justify-around items-center z-50 shadow-lg">
      
      {/* 1. 홈 탭 */}
      <Link to="/" className={`flex flex-col items-center gap-1 text-xs transition-colors ${getTabStyle('/')}`}>
        <Home className="w-5 h-5" color={getIconColor('/')} strokeWidth={isActive('/') ? 2.5 : 1.8} />
        <span>Home</span>
      </Link>

      {/* 2. 오더 (주문) 탭 */}
      <Link to="/order" className={`flex flex-col items-center gap-1 text-xs transition-colors ${getTabStyle('/order')}`}>
        <Coffee className="w-5 h-5" color={getIconColor('/order')} strokeWidth={isActive('/order') ? 2.5 : 1.8} />
        <span>Order</span>
      </Link>

      {/* 3. 로케이션 (매장) 탭 */}
      <Link to="/locations" className={`flex flex-col items-center gap-1 text-xs transition-colors ${getTabStyle('/locations')}`}>
        <MapPin className="w-5 h-5" color={getIconColor('/locations')} strokeWidth={isActive('/locations') ? 2.5 : 1.8} />
        <span>Stores</span>
      </Link>

      {/* 4. 마이페이지 탭 */}
      <Link to="/mypage" className={`flex flex-col items-center gap-1 text-xs transition-colors ${getTabStyle('/mypage')}`}>
        <User className="w-5 h-5" color={getIconColor('/mypage')} strokeWidth={isActive('/mypage') ? 2.5 : 1.8} />
        <span>Profile</span>
      </Link>
    </nav>
  );
}