import { useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import useCartStore from './store/useCartStore';
import { useQuery } from '@tanstack/react-query';

// 1. 상세 페이지 컴포넌트 - 임시라 귀찮아서 컴포넌트 분리 안 함. 나중에 필요시 분리 예정
function DetailPage() {
  const { id } = useParams(); // URL 주소에 있는 :id 값을 뽑아냄!
  
  // 💡 [useQuery 공식 템플릿]
  // queryKey를 ['productDetail', id]로 고유하게 분리!
  const { data: product, isLoading, error } = useQuery({
    queryKey: ['productDetail', id], // 1. 이 데이터의 고유 이름표 (캐싱을 위해 필수!)
    queryFn: async () => {     // 2. 서버에서 데이터를 가져오는 실제 통신 함수
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return res.data;         // 여기서 리턴한 값이 data에 쏙 담깁니다!
    },
  });

  // 1. 로딩 처리 (React Query가 알아서 isLoading을 참/거짓으로 판별해 줍니다)
  if (isLoading) return <p>로딩 중입니다...</p>;

  // 2. 에러 처리
  if (error) return <p>에러가 발생했습니다: {error.message}</p>;

  // 3. 정상 렌더링 (data를 그냥 쓰면 끝!)
  return (
    <div style={{ padding: '20px' }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: '200px' }} />
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <Link to="/">← 목록으로 돌아가기</Link>
    </div>
  );
}

function App() {
  // 미션 1 : 오픈 API에서 상품 데이터를 가져와서 화면에 카드 형태로 쫙 띄우기 (useEffect + fetch + .map())
  // 미션 2: 인풋창에 검색어를 입력했을 때, 원하는 상품만 쏙쏙 필터링해서 보여주기 (useState + 배열 필터링)
  // 미션 3: 상품 카드를 누르면 상세 정보 화면으로 넘어가게 만들기 (React Router 활용)
  // 미션 4: 상세 페이지(/product/:id)에서 진짜 해당 상품의 상세 정보 보여주기
  // 미션 5: 마음에 드는 상품을 '장바구니'에 담고 관리하기
  
  // 💡 [React Query 적용] 전체 상품 목록 가져오기
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['productsKey'], // 1. 이 데이터의 고유 이름표 (캐싱을 위해 필수!)
    queryFn: async () => {     // 2. 서버에서 데이터를 가져오는 실제 통신 함수
      const res = await axios.get('https://fakestoreapi.com/products');
      return res.data;         // 여기서 리턴한 값이 data에 쏙 담깁니다!
    },
  });

  const [searchWord, setSearchWord] = useState('');
  // [Zustand 적용] 장바구니 상태 및 함수 가져오기
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);

  // 검색 필터링
  const filteredProducts = products.filter(item => item.title.toLowerCase().includes(searchWord.toLowerCase()));

  // 2. 상태에 따른 화면 분기 처리 - 데이터가 아직 안 왔을 때 보여줄 화면 등
  // 1. 로딩 처리 (React Query가 알아서 isLoading을 참/거짓으로 판별해 줍니다)
  if (isLoading) return <p>로딩 중입니다...</p>;
  // 2. 에러 처리
  if (error) return <p>에러가 발생했습니다: {error.message}</p>;

  return (
    <BrowserRouter>
      <Routes>
        {/* 루트 주소('/')일 때는 상품 목록 화면 보여주기 */}
        <Route path='/' element={
          <>
            <h1>상품 목록</h1>
            <div>
              <input
                type='text'
                value={searchWord}
                onChange={(e) => {setSearchWord(e.target.value)}} 
                placeholder='검색어를 입력하세요'/>
            </div>
            <div className='product-list'>
              <ul>
                {filteredProducts.map(item => (
                  <li key={item.id}>
                    {/* 💡 카드를 누르면 상세 페이지로 이동하도록 Link 연결 */}
                    <Link to={`/product/${item.id}`}>{item.title}</Link>
                    {/* 💡 [핵심 포인트 2] Zustand에서 가져온 addToCart 함수 연결 */}
                    <button onClick={()=>addToCart(item)}>장바구니 추가</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 💡 미션 5번을 시각적으로 완성해 줄 장바구니 현황판 */}
            {/* 💡 [핵심 포인트 3] Zustand의 cart 상태를 기준으로 개수와 목록 출력 */}
            {/* 💡 [수정 포인트 2] 장바구니 현황판 오타 수정 및 깔끔한 정리 */}
            <div>
              <h2>🛒 내 장바구니 ({cart.length}개)</h2>
              {cart.length === 0 ? (
                <p>장바구니가 비어 있습니다.</p>
              ) : (
                <ul>
                  {cart.map((cartItem, index) => (
                    /* 장바구니는 똑같은 상품을 여러 개 담을 수도 있으므로 key는 index나 고유 조합 사용 */
                    <li key={index}>{cartItem.title} : ${cartItem.price}</li>
                  ))}
                </ul>
              )}
            </div>
          </>
        } />
        
        {/* '/product/숫자' 주소일 때는 상세 페이지 보여주기 */}
        <Route path="/product/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
