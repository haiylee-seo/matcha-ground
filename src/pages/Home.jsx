import { useState } from "react";
import ContentCard from "../components/ContentCard";
import { X } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ul className="flex flex-col gap-6 mt-4">
        <ContentCard onClick={() => setIsOpen(true)} />
        <ContentCard onClick={() => setIsOpen(true)} />
        <ContentCard onClick={() => setIsOpen(true)} />
      </ul>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 transition-opacity z-60"
        />
      )}
      <div
        className={`fixed bottom-0 left-0 right-0 z-60 bg-white rounded-t-4xl p-6 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        <div className="py-2">
          <p className="text-gray-600">
            아래에서 위로 올라오는 토스트 UI 디자인입니다.
          </p>
        </div>
      </div>
    </>
  );
}
