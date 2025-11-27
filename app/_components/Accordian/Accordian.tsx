"use client";
import { useState } from "react";
function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-700 rounded-md border-r-amber-600 border-r-4 px-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="font-medium">{title}</span>
        <span
          className={`transform transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-fit opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 text-gray-400">{children}</div>
      </div>
    </div>
  );
}
export default Accordion;
