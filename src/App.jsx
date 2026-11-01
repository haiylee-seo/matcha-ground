// import { useState } from 'react'
// import axios from 'axios'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
// import MobileLayout from './layout/MobileLayout';
import Home from './pages/Home';
import Order from './pages/Order';
import MainLayout from './layout/MainLayout';
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
        </Route>
        
        {/* '/product/숫자' 주소일 때는 상세 페이지 보여주기 */}
        {/* <Route path="/product/:id" element={<DetailPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
