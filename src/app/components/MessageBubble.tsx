import React from "react";
interface Props {
  messageBody: string;
  date: string;
  time: string;
}

const MessageBubble: React.FC<Props> = ({ messageBody, date, time }) => {
  return (
    <div className="flex justify-end">
      {/* Container for message bubble */}
      <div className="flex gap-4 p-2 w-9/12 flex-row-reverse">
        {/* Circle for user avatar */}
        <div className="min-w-8 h-8 bg-black rounded-full"></div>
        {/* Container for message content */}
        <div className="flex flex-col">
          {/* Bubble for message content */}
          <div className="p-4 bg-white rounded-2xl">
            {/* Text content of the message */}
            <p className="text-sm text-black">{messageBody}</p>
          </div>
          {/* Footer for the message */}
          <div className="p-2">
            {/* Footer text */}
            <p className="text-sm text-black text-right">Message Footer</p>
          </div>
        </div>
        {/* Container for icon */}
        <div className="Icon-wrrap flex items-center justify-center mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <path
              stroke="#8A8A8A"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M13.333 10.75v3.5c0 2.917-1.166 4.083-4.083 4.083h-3.5c-2.917 0-4.083-1.166-4.083-4.083v-3.5c0-2.917 1.166-4.083 4.083-4.083h3.5c2.917 0 4.083 1.166 4.083 4.083Z"
            ></path>
            <path
              stroke="#8A8A8A"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.25"
              d="M18.333 5.75v3.5c0 2.917-1.166 4.083-4.083 4.083h-.917V10.75c0-2.917-1.166-4.083-4.083-4.083H6.667V5.75c0-2.917 1.166-4.083 4.083-4.083h3.5c2.917 0 4.083 1.166 4.083 4.083Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
