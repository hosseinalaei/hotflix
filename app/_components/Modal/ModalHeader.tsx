// components/ModalHeader.tsx
import { ReactNode } from "react";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
  children?: ReactNode;
}

export function ModalHeader({ title, onClose, children }: ModalHeaderProps) {
  return (
    <div className="flex items-center justify-between p-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="flex items-center space-x-2">
        {children}
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
