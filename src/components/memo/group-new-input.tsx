// components/Modal.js
import React, { ReactNode } from "react";
interface Props {
  isVisible: boolean;
  onClose: () => void;
  //   children: ReactNode;
}

const GroupNewInput: React.FC<Props> = ({ isVisible, onClose }) => {
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLDivElement).id === "input-background") {
      onClose();
    }
  };
  if (!isVisible) return null;

  return (
    <div
      id="input-background"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-8 rounded-md shadow-md z-50 relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default GroupNewInput;
