const TABS = [
  { key: "menu", label: "Menu" },
  { key: "previous", label: "Previous" },
  { key: "favourite", label: "favourites" },
];

export default function OrderTabs({ activeTab, onTabChange }) {
  return (
    <>
      <ul className="sticky top-16 z-50 bg-[#FBF9F5] w-full flex justify-between items-center shadow-lg">
        {TABS.map((tab) => (
          <li
            key={tab.key}
            role="tab"
            aria-selected={activeTab === tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`flex-1 py-2 px-2 text-center transition-all ${
              activeTab === tab.key
                ? "border-b-2 border-[#165D31] font-semibold text-black"
                : "text-gray-600"
            }`}
          >
            {tab.label}
          </li>
        ))}
        {/* <li
          role="tab"
          aria-selected={activeTab === "menu"}
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
          role="tab"
          aria-selected={activeTab === "previous"}
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
          role="tab"
          aria-selected={activeTab === "favourite"}
          onClick={() => setActiveTab("favourite")}
          className={`flex-1 py-2 px-2 text-center transition-all ${
            activeTab === "favourite"
              ? "border-b-2 border-[#165D31] font-semibold text-black"
              : "text-gray-600"
          }`}
        >
          favourites
        </li> */}
      </ul>
    </>
  );
}
