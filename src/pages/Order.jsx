import { useState } from "react";
import heroImg from "../assets/hero.png";
import { Heart } from "lucide-react";
// src/pages/Order.jsx
export default function Order() {
  const [activeTab, setActiveTab] = useState("menu");
  return (
    <>
      <ul className="bg-[#FBF9F5] w-full flex justify-between items-center shadow-lg">
        <li
          onClick={() => setActiveTab("menu")}
          className={`flex-1 py-2 px-2 text-center transition-all ${
            activeTab === "menu"
              ? "border-b-2 border-[#165D31] font-semibold text-black"
              : "text-gray-600"
          }`}
        >
          Menu
        </li>
        <li
          onClick={() => setActiveTab("previous")}
          className={`flex-1 py-2 px-2 text-center transition-all ${
            activeTab === "previous"
              ? "border-b-2 border-[#165D31] font-semibold text-black"
              : "text-gray-600"
          }`}
        >
          Previous
        </li>
        <li
          onClick={() => setActiveTab("favourite")}
          className={`flex-1 py-2 px-2 text-center transition-all ${
            activeTab === "favourite"
              ? "border-b-2 border-[#165D31] font-semibold text-black"
              : "text-gray-600"
          }`}
        >
          favourites
        </li>
      </ul>

      <ul className="w-full">
        {/* menu */}
        {activeTab === "menu" && (
          <>
            <li className="px-4 pt-4">
              <p className="mb-4 text-3xl font-bold">Milk Matcha</p>
              <ul>
                <li className="flex items-center gap-6 mb-4">
                  <div className="relative">
                    <img
                      src={heroImg}
                      alt="Hero"
                      className="rounded-full w-24 h-24 bg-[red]"
                    />
                    <Heart className="absolute bottom-0 right-0 w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">menu name a</p>
                    <p className="text-lg font-semibold">$2.22</p>
                  </div>
                </li>
                <li className="flex items-center gap-6 mb-4">
                  <div className="relative">
                    <img
                      src={heroImg}
                      alt="Hero"
                      className="rounded-full w-24 h-24 bg-[red]"
                    />
                    <Heart className="absolute bottom-0 right-0 w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">menu name a</p>
                    <p className="text-lg font-semibold">$2.22</p>
                  </div>
                </li>
                <li className="flex items-center gap-6 mb-4">
                  <div className="relative">
                    <img
                      src={heroImg}
                      alt="Hero"
                      className="rounded-full w-24 h-24 bg-[red]"
                    />
                    <Heart className="absolute bottom-0 right-0 w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">menu name a</p>
                    <p className="text-lg font-semibold">$2.22</p>
                  </div>
                </li>
              </ul>
            </li>
            <li className="px-4 pt-4">
              <p className="mb-4 text-3xl font-bold">Yuzu Matcha</p>
              <ul>
                <li className="flex items-center gap-6 mb-4">
                  <div className="relative">
                    <img
                      src={heroImg}
                      alt="Hero"
                      className="rounded-full w-24 h-24 bg-[red]"
                    />
                    <Heart className="absolute bottom-0 right-0 w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">menu name a</p>
                    <p className="text-lg font-semibold">$2.22</p>
                  </div>
                </li>
                <li className="flex items-center gap-6 mb-4">
                  <div className="relative">
                    <img
                      src={heroImg}
                      alt="Hero"
                      className="rounded-full w-24 h-24 bg-[red]"
                    />
                    <Heart className="absolute bottom-0 right-0 w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">menu name a</p>
                    <p className="text-lg font-semibold">$2.22</p>
                  </div>
                </li>
                <li className="flex items-center gap-6 mb-4">
                  <div className="relative">
                    <img
                      src={heroImg}
                      alt="Hero"
                      className="rounded-full w-24 h-24 bg-[red]"
                    />
                    <Heart className="absolute bottom-0 right-0 w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">menu name a</p>
                    <p className="text-lg font-semibold">$2.22</p>
                  </div>
                </li>
              </ul>
            </li>
          </>
        )}
        {activeTab === "previous" && (
          <li>
            <div className="bg-[#EBE7DF] flex items-center justify-between px-4 py-2 text-[#8C8C8C]">
              <div>
                <p className="text-sm font-medium">25 Oct 2026 at 14:03</p>
                <p>via mobile order</p>
              </div>
              <span className="text-lg font-bold">$9.00</span>
            </div>
            <ul className="px-4 pt-4">
              <li className="flex items-center gap-6 mb-4">
                <img
                  src={heroImg}
                  alt="Hero"
                  className="rounded-full w-20 h-20 bg-[red]"
                />
                <div>
                  <p className="text-lg font-bold">Matcha Latte</p>
                  <p className="text-[#8C8C8C] text-xs font-medium">Oat milk</p>
                  <p className="text-[#8C8C8C] text-xs font-medium">step dc</p>
                  <p className="text-sm font-semibold">$4.50</p>
                </div>
              </li>
              <li className="flex items-center gap-6 mb-4">
                <img
                  src={heroImg}
                  alt="Hero"
                  className="rounded-full w-20 h-20 bg-[red]"
                />
                <div>
                  <p className="text-lg font-bold">Matcha Latte</p>
                  <p className="text-[#8C8C8C] text-xs font-medium">Oat milk</p>
                  <p className="text-[#8C8C8C] text-xs font-medium">step dc</p>
                  <p className="text-sm font-semibold">$4.50</p>
                </div>
              </li>
            </ul>
          </li>
        )}
        {activeTab === "favourite" && (
          <li className="px-4 pt-4">
            <ul>
              <li className="flex items-center gap-6 mb-4">
                <div className="relative">
                  <img
                    src={heroImg}
                    alt="Hero"
                    className="rounded-full w-20 h-20 bg-[red]"
                  />
                  <Heart className="absolute bottom-0 right-0 w-7 h-7" />
                </div>
                <div>
                  <p className="text-2xl font-bold">menu name a</p>
                  <p className="text-lg font-semibold">$2.22</p>
                </div>
              </li>
              <li className="flex items-center gap-6 mb-4">
                <div className="relative">
                  <img
                    src={heroImg}
                    alt="Hero"
                    className="rounded-full w-20 h-20 bg-[red]"
                  />
                  <Heart className="absolute bottom-0 right-0 w-7 h-7" />
                </div>
                <div>
                  <p className="text-2xl font-bold">menu name a</p>
                  <p className="text-lg font-semibold">$2.22</p>
                </div>
              </li>
              <li className="flex items-center gap-6 mb-4">
                <div className="relative">
                  <img
                    src={heroImg}
                    alt="Hero"
                    className="rounded-full w-20 h-20 bg-[red]"
                  />
                  <Heart className="absolute bottom-0 right-0 w-7 h-7" />
                </div>
                <div>
                  <p className="text-2xl font-bold">menu name a</p>
                  <p className="text-lg font-semibold">$2.22</p>
                </div>
              </li>
            </ul>
          </li>
        )}
      </ul>
    </>
  );
}
