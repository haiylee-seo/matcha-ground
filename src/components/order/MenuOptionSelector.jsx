import { useState } from "react";

const MILK_OPTIONS = ["Oat milk", "Whole milk", "Coconut milk"];
const TOPPING_OPTIONS = [
  "Collagen",
  "Ashwaganda",
  "Maca",
  "Bee Pollen",
  "Cream Brulee",
  "OREO",
];
const SWEETNESS_OPTIONS = ["Less Sweet", "Extra Sweet"];
const MATCHA_OPTIONS = ["Less Matcha", "Extra Matcha", "No Matcha"];
const ICE_OPTIONS = ["Less Ice", "Extra Ice", "No Ice"];

export default function MenuOptionSelector({ item, onConfirm }) {
  const [milk, setMilk] = useState(MILK_OPTIONS[0]);
  const [topping, setTopping] = useState(TOPPING_OPTIONS[0]);
  const [sweetness, setSweetness] = useState(SWEETNESS_OPTIONS[0]);
  const [matcha, setMatcha] = useState(MATCHA_OPTIONS[0]);
  const [ice, setIce] = useState(ICE_OPTIONS[0]);

  if (!item) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({
      ...item,
      options: { milk, topping, sweetness, matcha, ice },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <p className="text-xl font-bold text-black">{item.name}</p>
        <p className="text-base font-semibold text-[#165D31]">{item.price}</p>
      </div>

      {/* 우유 선택 */}
      <div>
        <p className="mb-2 text-sm font-semibold text-gray-800">Milk</p>
        <div className="flex flex-wrap gap-2">
          {MILK_OPTIONS.map((option) => {
            const selected = milk === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setMilk(option)}
                className={`px-3.5 py-2 rounded-full text-sm font-medium border transition-colors ${
                  selected
                    ? "bg-[#165D31] text-white border-[#165D31]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-gray-800">Topping</p>
        <div className="flex flex-wrap gap-2">
          {TOPPING_OPTIONS.map((option) => {
            const selected = topping === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setTopping(option)}
                className={`px-3.5 py-2 rounded-full text-sm font-medium border transition-colors ${
                  selected
                    ? "bg-[#165D31] text-white border-[#165D31]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {/* 당도 선택 */}
      <div>
        <p className="mb-2 text-sm font-semibold text-gray-800">Sweetness</p>
        <div className="flex flex-wrap gap-2">
          {SWEETNESS_OPTIONS.map((option) => {
            const selected = sweetness === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setSweetness(option)}
                className={`px-3.5 py-2 rounded-full text-sm font-medium border transition-colors ${
                  selected
                    ? "bg-[#165D31] text-white border-[#165D31]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm font-semibold text-gray-800">Matcha</p>
        <div className="flex flex-wrap gap-2">
          {MATCHA_OPTIONS.map((option) => {
            const selected = matcha === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setMatcha(option)}
                className={`px-3.5 py-2 rounded-full text-sm font-medium border transition-colors ${
                  selected
                    ? "bg-[#165D31] text-white border-[#165D31]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm font-semibold text-gray-800">Ice</p>
        <div className="flex flex-wrap gap-2">
          {ICE_OPTIONS.map((option) => {
            const selected = ice === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setIce(option)}
                className={`px-3.5 py-2 rounded-full text-sm font-medium border transition-colors ${
                  selected
                    ? "bg-[#165D31] text-white border-[#165D31]"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-full bg-[#165D31] text-white font-semibold text-base"
      >
        {item.price} · Add to order
      </button>
    </form>
  );
}
