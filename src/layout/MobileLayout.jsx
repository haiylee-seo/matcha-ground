import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomTabBar from './BottomTabBar';

export default function MobileLayout() {
  return (
    <div className="mobile-frame">
      <Header />
      
      <main className="content">
        <Outlet /> 
      </main>

      <BottomTabBar />
    </div>
  );
}