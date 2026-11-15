// import { useState } from 'react'
// import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MobileLayout from './layout/MobileLayout';
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Locations from "./pages/Locations";
import Mypage from "./pages/Mypage";

// 새로 만들 서브페이지들 예시 (실제 파일 경로에 맞게 임포트)
import PersonalInfo from "./pages/mypage/PersonalInfo";
import ChangePassword from "./pages/mypage/ChangePassword";
import PaymentMethods from "./pages/mypage/PaymentMethods";
import Help from "./pages/mypage/Help";
import TermsOfUse from "./pages/mypage/TermsOfUse";
import PrivacyStatement from "./pages/mypage/PrivacyStatement";

// import useCartStore from './store/useCartStore';
// import { useQuery } from '@tanstack/react-query';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 공통 레이아웃을 감싸는 부모 라우트 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/mypage" element={<Mypage />} />

          {/* 마이페이지 서브페이지 라우트 추가 */}
          <Route path="/mypage/personal-info" element={<PersonalInfo />} />
          <Route path="/mypage/password" element={<ChangePassword />} />
          <Route path="/mypage/payment" element={<PaymentMethods />} />
          <Route path="/mypage/help" element={<Help />} />
          <Route path="/mypage/terms" element={<TermsOfUse />} />
          <Route path="/mypage/privacy" element={<PrivacyStatement />} />
        </Route>

        {/* '/product/숫자' 주소일 때는 상세 페이지 보여주기 */}
        {/* <Route path="/product/:id" element={<DetailPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
