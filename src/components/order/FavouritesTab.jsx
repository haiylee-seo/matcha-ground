import MenuItemRow from "./MenuItemRow";
// import heroImg from "../../assets/hero.png";

const FAVOURITE_ITEMS = [
  { id: "fav-1", name: "Matcha Latte", price: "£ ??" },
  { id: "fav-2", name: "Vanilla", price: "£ ??" },
  { id: "fav-3", name: "biscoff", price: "£ ??" },
];

export default function FavouritesTab({ onSelectItem }) {
  return (
    <>
      <li className="px-4 pt-4">
        <ul>
          {/* <li className="flex items-center gap-6 mb-4"> */}
          {FAVOURITE_ITEMS.map((item) => (
            <MenuItemRow
              key={item.id}
              name={item.name}
              price={item.price}
              imageSize="w-20 h-20"
              onSelect={onSelectItem ? () => onSelectItem(item) : undefined}
            />
          ))}
        </ul>
      </li>
    </>
  );
}
