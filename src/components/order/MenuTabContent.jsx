import MenuItemRow from "./MenuItemRow";

const MENU_SECTIONS = [
  {
    category: "Milk Matcha",
    items: [
      { id: "mm-1", name: "Matcha Latte", price: "£4.50" },
      { id: "mm-2", name: "Vanilla Matcha", price: "£4.50" },
      { id: "mm-3", name: "Mango Matcha", price: "£4.50" },
    ],
  },
  {
    category: "Yuzu Matcha",
    items: [
      { id: "ym-1", name: "Mango Yuzu", price: "£4.50" },
      { id: "ym-2", name: "Passion fruit Yuzu", price: "£4.50" },
      { id: "ym-3", name: "Violet Lychee Yuzu", price: "£4.50" },
      { id: "ym-4", name: "Violet Peach Yuzu", price: "£4.50" },
    ],
  },
  {
    category: "Super Chargers",
    items: [
      { id: "sm-1", name: "Matcha Collagen Latte", price: "£5.50" },
      { id: "sm-2", name: "Golden Turmeric Matcha", price: "£5.50" },
      { id: "sm-3", name: "Butterfly Maca Matcha", price: "£5.50" },
      { id: "sm-4", name: "Butterfly Turmeric Matcha", price: "£5.50" },
    ],
  },
];

export default function MenuTabContent({ onSelectItem }) {
  return (
    <>
      {MENU_SECTIONS.map((section) => (
        <li key={section.category} className="px-4 pt-4">
          <p className="mb-4 text-xl font-semibold text-[#165D31]">
            {section.category}
          </p>
          <ul>
            {section.items.map((item) => (
              <MenuItemRow
                key={item.id}
                name={item.name}
                price={item.price}
                onSelect={() => onSelectItem(item)}
              />
            ))}
          </ul>
        </li>
      ))}
    </>
  );
}
