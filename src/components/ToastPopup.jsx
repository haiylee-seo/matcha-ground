import { X } from "lucide-react";

export default function ToastPopup({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 transition-opacity z-60"
        />
      )}
      <div
        className={`fixed bottom-0 left-0 right-0 z-60 max-h-[75dvh] bg-white flex flex-col rounded-t-4xl p-6 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 pointer-events-auto"
            : "translate-y-full pointer-events-auto"
        }`}
      >
        <button
          onClick={onClose}
          className="shrink-0 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        <div className="flex-1 min-h-0 py-2 overflow-y-auto">
          {children}
          {/* <p className="text-gray-600">
            아래에서 위로 올라오는 토스트 UI 디자인입니다.
          </p> */}
        </div>
      </div>
    </>
  );
}
