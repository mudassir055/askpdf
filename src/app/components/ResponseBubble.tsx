import React from "react";
import { useState } from "react";

interface Props {
  resBody: string;
  date: string;
  time: string;
}

const ResponseBubble: React.FC<Props> = ({ resBody, date, time }) => {
  const [showCopyNotification, setShowCopyNotification] =
    useState<boolean>(false);

  const handleCopyText = () => {
    navigator.clipboard.writeText(resBody);
    setShowCopyNotification(true);
    setTimeout(() => {
      setShowCopyNotification(false);
    }, 2000); // Hide notification after 2 seconds
  };

  return (
    <div className="flex justify-start">
      {/* Container for response bubble */}
      <div className="flex gap-4 p-2 w-9/12">
        {/* Circle for user avatar */}
        <div className="chat-image flex h-full items-start avatar">
          <div className="w-8 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        {/* Container for response content */}
        <div className="flex flex-col">
          {/* Bubble for response content */}
          <div className="chat-bubble p-4 rounded-2xl">
            {/* Text content of the response */}
            <p className="text-sm ">{resBody}</p>
          </div>
          {/* Footer for the response */}
          <div className="chat-footer p-2 flex gap-1">
            {/* Footer text */}
            <p className="text-sm">{date},</p>
            <p className="text-sm">{time}</p>
          </div>
        </div>
        {/* Container for icon */}
        <button
          className="Icon-wrrap flex items-center justify-center mb-10"
          onClick={handleCopyText}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <path
              stroke="#8A8A8A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.25"
              d="M13.333 10.75v3.5c0 2.917-1.166 4.083-4.083 4.083h-3.5c-2.917 0-4.083-1.166-4.083-4.083v-3.5c0-2.917 1.166-4.083 4.083-4.083h3.5c2.917 0 4.083 1.166 4.083 4.083Z"
            ></path>
            <path
              stroke="#8A8A8A"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.25"
              d="M18.333 5.75v3.5c0 2.917-1.166 4.083-4.083 4.083h-.917V10.75c0-2.917-1.166-4.083-4.083-4.083H6.667V5.75c0-2.917 1.166-4.083 4.083-4.083h3.5c2.917 0 4.083 1.166 4.083 4.083Z"
            ></path>
          </svg>
        </button>
      </div>
      {/* Copy Notification */}
      {showCopyNotification && (
        <div className="absolute top-0 right-[40%] m-4 bg-gray-800 text-white p-2 rounded">
          Message copied!
        </div>
      )}
    </div>
  );
};

export default ResponseBubble;
