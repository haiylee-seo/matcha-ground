import { Heart } from "lucide-react";
import heroImg from "../../assets/hero.png";

export default function MenuItemRow({ name, price, onSelect }) {
  return (
    <>
      <li onClick={onSelect} className="flex items-center gap-6 mb-4">
        <div className="relative">
          <img
            src={heroImg}
            alt="Hero"
            className="rounded-full w-20 h-20 bg-[red]"
          />
          <Heart className="absolute bottom-0 right-0 w-6 h-6" />
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-700">{name}</p>
          <p className="text-lg font-medium text-gray-700">{price}</p>
        </div>
      </li>
    </>
  );
}
