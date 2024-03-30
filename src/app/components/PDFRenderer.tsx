"use client";
import { useState } from "react";

// PDFRenderer component renders PDF view with toggler
const PDFRenderer = () => {
  // State to manage visibility of PDF view
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle PDF view visibility
  const toggleRenderer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* PDF view container */}
      <div
        //className={`hidden lg:flex lg:flex-col lg:h-full lg:w-full`}
        className={`flex flex-col h-full absolute left-0 ${
          isOpen ? "w-full" : "w-0 overflow-hidden"
        } bg-slate-50 transition-all lg:static lg:w-full`}
      >
        {/* PDF content */}
        <div className="bg-white flex-grow overflow-y-auto p-4">
          <p>PDF View</p>
        </div>

        {/* Footer with PDF controls */}
        <footer className="flex justify-between items-start bg-white p-4 pb-7 min-h-16">
          <div className="flex justify-between items-center w-full">
            {/* PDF control buttons */}
            <div className="flex gap-2">
              {/* Button for explaining images */}
              <button className="flex items-center justify-center gap-2 rounded-lg border-gray-300 border-2 py-2 px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    stroke="#344054"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 9.5V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h1.7m7.886-3.289-1.698 3.154c-.278.516-.417.774-.586.84a.5.5 0 0 1-.447-.038c-.155-.096-.247-.374-.43-.93L11.5 12.511c-.16-.486-.241-.73-.183-.892a.5.5 0 0 1 .302-.302c.162-.058.405.022.892.183l8.226 2.724c.556.184.834.276.93.431a.5.5 0 0 1 .039.447c-.067.17-.325.308-.84.586l-3.155 1.698a1.062 1.062 0 0 0-.152.09.508.508 0 0 0-.082.083 1.062 1.062 0 0 0-.09.152Z"
                  ></path>
                </svg>
                <p>Explain Images</p>
              </button>
              {/* Other PDF control buttons */}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    stroke="#344054"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m21 21-4.35-4.35M8 11h6m5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    stroke="#344054"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m21 21-4.35-4.35M11 8v6m-3-3h6m5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    stroke="#344054"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Display current page number */}
            <div className="font-semibold text-black">
              <p>Page 4 of 16</p>
            </div>
          </div>
        </footer>
      </div>
      {/* Button to toggle PDF view visibility on small screens */}
      <button
        className="absolute top-52 -ml-4 p-2 rounded bg-black h-32 lg:hidden"
        onClick={toggleRenderer}
      >
        Click
      </button>
    </>
  );
};

export default PDFRenderer;
