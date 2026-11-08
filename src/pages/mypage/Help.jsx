import { Outlet } from "react-router-dom";

export default function Help() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <main className="w-full flex-1 bg-white pb-24">
        <Outlet />
      </main>
    </div>
  );
}
