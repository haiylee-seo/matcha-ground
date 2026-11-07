import { Outlet } from "react-router-dom";
import Header from "./Header";
import BottomTabBar from "./BottomTabBar";

export default function MainLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header />

      <main className="w-full flex-1 bg-white pb-24">
        <Outlet />
      </main>

      <BottomTabBar />
    </div>
  );
}
