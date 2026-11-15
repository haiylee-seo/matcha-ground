import { useState } from "react";
import ContentCard from "../components/ContentCard";
import ToastPopup from "../components/ToastPopup";

export default function Locations() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ul className="flex flex-col gap-6 mt-4">
        <ContentCard onClick={() => setIsOpen(true)} />
        <ContentCard onClick={() => setIsOpen(true)} />
        <ContentCard onClick={() => setIsOpen(true)} />
      </ul>
      <ToastPopup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p className="text-gray-600">
          아래에서 위로 올라오는 토스트 UI 디자인입니다.
        </p>
      </ToastPopup>
    </>
  );
}
