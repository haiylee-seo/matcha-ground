import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export default function ToastPopup({ isOpen, onClose, children }) {
  const startYRef = useRef(null);
  const contentRef = useRef(null);
  const [dragY, setDragY] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
      setDragY(0);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTouchStart = (e) => {
    if (contentRef.current && contentRef.current.scrollTop > 0) {
      startYRef.current = null;
      return;
    }
    startYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (startYRef.current === null) return;
    const diff = e.touches[0].clientY - startYRef.current;
    if (diff > 0) {
      setDragY(diff);
    }
  };

  const handleTouchEnd = () => {
    if (dragY > 80) {
      onClose();
    }
    startYRef.current = null;
    setDragY(0);
  };

  return (
    <>
      {/* {isOpen && ( */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-60 bg-black/40 touch-none"
      />
      {/* )} */}
      <div
        // onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={dragY > 0 ? { transform: `translateY(${dragY}px)` } : undefined}
        className={`fixed bottom-0 left-0 right-0 z-60 max-h-[85dvh] bg-white flex flex-col rounded-t-4xl p-6 shadow-xl translate-y-0 ${
          dragY > 0 ? "" : "transition-transform duration-300 ease-in-out"
        }`}
        // className="fixed bottom-0 left-0 right-0 z-60 max-h-[85dvh] bg-white flex flex-col rounded-t-4xl p-6 shadow-xl  duration-300 ease-in-out pointer-events-auto"
      >
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 self-start p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        <div
          ref={contentRef}
          className="flex-1 min-h-0 py-2 overflow-y-auto overscroll-contain"
        >
          {children}
        </div>
      </div>
    </>
  );
}
