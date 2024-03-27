"use client";
import { useState } from "react";
const PDFRenderer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRenderer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`h-full absolute left-0 ${
          isOpen ? "w-0 overflow-hidden" : "w-full"
        } bg-slate-50 transition-all lg:static lg:w-full`}
      >
        PDFRenderer
      </div>
      <button
        className="absolute top-52 -ml-2 p-2 rounded bg-black h-32 lg:hidden"
        onClick={toggleRenderer}
      >
        Click
      </button>
    </>
  );
};

export default PDFRenderer;
