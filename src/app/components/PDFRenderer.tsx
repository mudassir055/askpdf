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
        } transition-all lg:static lg:w-full z-[1] lg:z-[-1] text-neutral-content`}
      >
        {/* PDF content */}
        <div className="flex-grow overflow-y-auto p-4 bg-base-100 text-base-content">
          <p>PDF View</p>
        </div>

        {/* Footer with PDF controls */}
        <footer className="flex justify-between items-start bg-base-200 text-base-content p-4 pb-7 min-h-24 max-h-24">
          <div className="flex justify-between items-center w-full">
            {/* PDF control buttons */}
            <div className="flex gap-2">
              {/* Button for explaining images */}
              <button className="btn rounded-lg border-neutral-content border-2 py-2 px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
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
                    stroke="currentColor"
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
                    stroke="currentColor"
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
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Display current page number */}
            <div className="font-semibold">
              <p>Page 4 of 16</p>
            </div>
          </div>
        </footer>
      </div>
      {/* Button to toggle PDF view visibility on small screens */}
      <button
        className="absolute top-52  p-2 rounded bg-black h-24 lg:hidden z-[2]"
        onClick={toggleRenderer}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          viewBox="0 0 256 256"
          transform={isOpen ? "rotate(180)" : "rotate(0)"}
        >
          <path d="M144.49,136.49l-80,80a12,12,0,0,1-17-17L119,128,47.51,56.49a12,12,0,0,1,17-17l80,80A12,12,0,0,1,144.49,136.49Zm80-17-80-80a12,12,0,1,0-17,17L199,128l-71.52,71.51a12,12,0,0,0,17,17l80-80A12,12,0,0,0,224.49,119.51Z"></path>
        </svg>
      </button>
    </>
  );
};

export default PDFRenderer;
