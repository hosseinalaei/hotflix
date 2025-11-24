// components/ModalBody.tsx
import { ReactNode } from "react";

interface ModalBodyProps {
  children: ReactNode;
  className?: string;
}

export function ModalBody({ children, className = "" }: ModalBodyProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
