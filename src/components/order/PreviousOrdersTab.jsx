import heroImg from "../../assets/hero.png";

const PREVIOUS_ITEMS = [
  {
    id: "prev-1",
    name: "Matcha Latte",
    options: ["Oat milk", "step dc"],
    price: "$4.50",
  },
  {
    id: "prev-2",
    name: "Matcha Latte",
    options: ["Oat milk", "step dc"],
    price: "$4.50",
  },
];

export default function PreviousOrdersTab() {
  return (
    <>
      <li>
        <div className="bg-[#EBE7DF] flex items-center justify-between px-4 py-2 text-[#8C8C8C]">
          <div>
            <p className="text-sm font-medium">25 Oct 2026 at 14:03</p>
            <p>via mobile order</p>
          </div>
          <span className="text-lg font-bold">$9.00</span>
        </div>
        <ul className="px-4 pt-4">
          {PREVIOUS_ITEMS.map((item) => (
            <li key={item.id} className="flex items-center gap-6 mb-4">
              <img
                src={heroImg}
                alt="Hero"
                className="rounded-full w-20 h-20 bg-[red]"
              />
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                {item.options.map((option) => (
                  <p className="text-[#8C8C8C] text-xs font-normal">{option}</p>
                ))}
                <p className="text-sm font-medium">{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
}
