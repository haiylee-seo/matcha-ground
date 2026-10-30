import { create } from 'zustand';

// 1. 스토어 생성
const useCartStore = create((set) => ({
    // 상태(State) 정의
    cart: [],

    // 상태를 변경하는 액션(함수) 정의
  addToCart: (product) => set((state) => ({ 
    cart: [...state.cart, product] 
  })),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== productId)
  })),
}));

export default useCartStore;