# 🍵 Matcha Ground

> **A mobile-first web application bringing a premium matcha cafe experience to life.**  
> Inspired by boutique matcha brands, reimagining the ordering experience with a Starbucks-style mobile app UX.

---

## 💡 Overview

Most local cafe websites are static and limited in functionality. **Matcha Ground** is a toy project designed to bridge that gap by implementing a modern, mobile-first ordering and loyalty application directly on the web.

It replicates the familiar, seamless UX of native mobile apps (like siren orders) within a controlled mobile viewport frame, covering everything from menu exploration to stamp rewards.

---

## ✨ Key Features

- **📱 App-like Mobile UI/UX**
  - Designed within a mobile viewport frame with a fixed bottom navigation bar for a native app feel.
- **☕ Mobile Siren Order (Order & Customization)**
  - Browse categorized matcha drinks and desserts.
  - Interactive item details modal for custom options (sweetness level, ice, extra toppings).
  - Cart and checkout simulation flow.
- **🎁 Rewards & Membership System**
  - Digital stamp/loyalty accumulation system with every drink order.
  - View coupon wallet and available member perks.
- **👤 Profile & Brand Story**
  - Order history tracking and minimalist brand storytelling inspired by modern cafe culture.

---

## 🛠 Tech Stack

- **Frontend:** React, JavaScript (or TypeScript)
- **Styling:** Tailwind CSS
- **State Management:** Zustand / React Context API
- **Icons:** Lucide React

---

## 📁 Project Structure

```text
src/
 ┣ components/      # Reusable UI components (Buttons, Modals, Navbar, etc.)
 ┣ layout/          # Mobile frame layout and navigation wrappers
 ┣ pages/           # Main tab views (Home, Order, Rewards, Profile)
 ┣ context/         # Global state management (Cart, User info)
 ┣ assets/          # Images and static resources
 ┗ App.js           # Router configuration
```

````

---

## 🌐 Live Demo

👉 Experience the live application here: **[Matcha Ground Preview](https://matcha-ground.vercel.app/)**

---

## 📌 Future Improvements

- [ ] Responsive layout optimization for larger tablet/desktop screens
- [ ] Mock payment API integration and interactive receipt modal
- [ ] Dark mode support

---

---

# 🍵 Matcha Ground

> **"모바일 속에서 즐기는 프리미엄 말차 라이프"**
> 실제 말차 전문 카페 브랜드를 모티브로 하여, 사용자 중심의 모바일 오더 및 리워드 경험을 웹 환경에서 구현한 토이 프로젝트입니다.

---

## 💡 프로젝트 소개 (About)

기존 카페 웹사이트의 정적인 정보 전달 방식에서 벗어나, 현대인들에게 친숙한 모바일 앱 UX(스타벅스 사이렌오더 등)를 웹에서 구현하고자 시작한 프로젝트입니다.

모바일 뷰포트 환경을 기준으로 디자인하여 실제 앱을 사용하는 듯한 인터랙션과 부드러운 화면 전환을 제공하며, 주문부터 리워드 적립까지 카페 이용의 전 과정을 하나의 앱처럼 경험할 수 있습니다.

---

## ✨ 주요 기능 (Key Features)

- **📱 App-like Mobile UI/UX**
- 데스크톱 및 모바일 환경에서 모두 일관된 모바일 앱 프레임 제공
- 하단 고정 네비게이션 바(Bottom Navigation Bar)를 통한 직관적인 탭 이동

- **☕ 모바일 사이렌 오더 (Order)**
- 카테고리별 말차 메뉴 탐색
- 옵션 선택 및 커스텀 기능 (당도, 얼음 양, 토핑 추가 등)
- 장바구니 및 주문 시뮬레이션

- **🎁 리워드 & 멤버십 시스템 (Rewards)**
- 음료 주문 시 적립되는 말차 스탬프/포인트 시스템
- 쿠폰함 및 혜택 조회

- **👤 마이페이지 & 브랜드 스토리 (Profile & About)**
- 사용자 주문 내역 관리
- 오리지널 브랜드의 철학과 가치를 담은 소개 페이지

---

## 🛠 기술 스택 (Tech Stack)

- **Frontend:** React, JavaScript (or TypeScript)
- **Styling:** Tailwind CSS / CSS Modules
- **State Management:** Zustand / React Context API
- **Icons:** Lucide React

---

## 📁 폴더 구조 (Directory Structure)

```text
src/
 ┣ components/      # 재사용 가능한 UI 컴포넌트 (Button, Modal, Header 등)
 ┣ layout/          # 모바일 프레임 및 네비게이션 레이아웃
 ┣ pages/           # 주요 탭 화면 (Home, Order, Rewards, MyPage)
 ┣ context/         # 전역 상태 관리 (장바구니, 유저 정보 등)
 ┣ assets/          # 이미지 및 폰트 리소스
 ┗ App.jsx           # 라우팅 설정

```
````
