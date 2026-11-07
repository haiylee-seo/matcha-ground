import heroImg from "../assets/hero.png";

export default function ContentCard() {
  return (
    <li className="bg-[#FBF9F5] h-[250px] shadow-lg mx-4 rounded-xl overflow-hidden">
      <div className="bg-[#ee87aa] h-[60%] w-full">
        <img src={heroImg} alt="Hero" className="h-full object-cover mx-auto" />
      </div>
      <div className="flex flex-col gap-2 py-4 px-6">
        <h2>event 1</h2>
        <p>오늘의 추천 메뉴 배너가 들어갑니다.</p>
      </div>
    </li>
  );
}
