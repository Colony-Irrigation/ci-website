import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }: {isOpen: boolean, onClose: () => void, children: ReactNode}) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    isOpen && (
      <div className="fixed inset-0 flex flex-col items-center justify-end z-50">
        <div
          className="absolute top-0 left-0 w-full h-10 bg-transparent cursor-pointer"
          onClick={onClose}
        ></div>
        <div
          className="w-full bg-white rounded-t-2xl shadow-lg p-4 max-w-md mx-auto transform transition-transform duration-300 ease-in-out"
          style={{ transform: isOpen ? "translateY(0)" : "translateY(100%)" }}
        >
          {children}
        </div>
      </div>
    ),
    document.body
  );
};

export default Modal;
