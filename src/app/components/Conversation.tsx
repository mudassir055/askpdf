import React from "react";

interface Props {
  name: string;
  starterText: string;
}

const Conversation: React.FC<Props> = ({ name, starterText }) => {
  return (
    <div className="flex gap-2 bg-gray-200 p-4 rounded-lg">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#101828"
          viewBox="0 0 256 256"
        >
          <path d="M216,48H40A16,16,0,0,0,24,64V224a15.84,15.84,0,0,0,9.25,14.5A16.05,16.05,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78.69.69,0,0,0,.13-.11L82.5,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H82.5a16,16,0,0,0-10.3,3.75l-.12.11L40,224V64H216Z"></path>
        </svg>
      </div>
      <div>
        {/* Conversation title  */}
        <h2 className="text-black font-semibold">{name}</h2>
        {/* Conversation text */}
        <p className="text-[12px]">{starterText}...</p>
      </div>
    </div>
  );
};

export default Conversation;
