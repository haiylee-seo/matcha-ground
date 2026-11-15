import { useState } from "react";

import OrderTabs from "../components/order/OrderTabs";
import MenuTabContent from "../components/order/MenuTabContent";
import PreviousOrdersTab from "../components/order/PreviousOrdersTab";
import FavouritesTab from "../components/order/FavouritesTab";
import ToastPopup from "../components/ToastPopup";
import MenuOptionSelector from "../components/order/MenuOptionSelector";

export default function Order() {
  const [activeTab, setActiveTab] = useState("menu");
  // const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleConfirmOrder = (orderedItem) => {
    console.log("선택된 메뉴 및 옵션:", orderedItem);
    setSelectedItem(null);
  };

  return (
    <>
      <OrderTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <ul className="w-full">
        {activeTab === "menu" && (
          <MenuTabContent onSelectItem={(item) => setSelectedItem(item)} />
        )}
        {activeTab === "previous" && <PreviousOrdersTab />}
        {activeTab === "favourite" && <FavouritesTab />}
      </ul>
      <ToastPopup
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        // onClose={() => setIsOpen(false)}
      >
        <MenuOptionSelector
          key={selectedItem?.id ?? "empty"}
          item={selectedItem}
          onConfirm={handleConfirmOrder}
        />
        {/* <p className="text-gray-600">
          {selectedItem
            ? `${selectedItem.name} (${selectedItem.price})`
            : "아래에서 위로 올라오는 토스트 UI 디자인입니다."}
        </p> */}
        {/* <p className="text-gray-600">
          아래에서 위로 올라오는 토스트 UI 디자인입니다.
        </p> */}
      </ToastPopup>
    </>
  );
}
