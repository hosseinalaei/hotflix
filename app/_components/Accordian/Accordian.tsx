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
    <div className="bg-slate-700 rounded-md border-r-amber-600 border-r-4 px-4 cursor-pointer hover:bg-slate-600">
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

      {open ? <div className="pb-4 text-gray-400">{children}</div> : null}
    </div>
  );
}
export default Accordion;
