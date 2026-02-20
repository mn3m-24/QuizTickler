import cn from "@/utils/cn";
import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode;
}

/* if !isOpen we don't show the dialog content, but it is rendered and returns null */
const Modal = ({isOpen, onClose, className, children }: ModalProps) => {
  // handle ESC key
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // lock body scroll dialog modal is open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {document.body.style.overflow = original};
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    // Backdrop (Overlay)
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className={cn(
          "bg-black/95",
          className
        )}
        onClick={(e) => e.stopPropagation()}
        role="alertdialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
