import heroImg from "../assets/hero.png";

export default function ContentCard({
  image = heroImg,
  alt = "",
  title = "event title",
  description = "오늘의 추천 메뉴 배너가 들어갑니다.",
  onClick,
}) {
  return (
    <li className="bg-[#FBF9F5] h-[250px] shadow-lg mx-4 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={onClick}
        className="w-full h-full flex flex-col text-left"
      >
        <div className="h-[60%] w-full overflow-hidden">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover object-center mx-auto"
          />
        </div>
        <div className="flex flex-col gap-1 py-4 px-6">
          <h2 className="text-[#165D31] font-semibold text-lg">{title}</h2>
          <p className="text-gray-600 font-medium text-sm">{description}</p>
        </div>
      </button>
    </li>
  );
}
