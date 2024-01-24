import React, {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";
const ModalContext = createContext<TModalContext | null>(null);
type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
};
type TModalContext = {
  onClose: () => void;
};
type TCloseButton = {
  children?: ReactNode;
};
type THeader = TCloseButton;
const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef(null);
  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed flex justify-center items-center  inset-0 bg-gray-500/70 invisible z-[999] ",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}>
        <div className="bg-white rounded px-2 py-2" ref={containerRef}>
          {" "}
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button className="bg-red-400 rounded text-white" onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-5 h-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};
const Header = ({ children }: THeader) => {
  return (
    <div className="flex gap-2 justify-between items-center w-full mb-3">
      {children}
    </div>
  );
};
Modal.CloseButton = CloseButton;
Modal.Header = Header;
export default Modal;
