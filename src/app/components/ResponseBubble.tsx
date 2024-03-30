import React from "react";

interface Props {
  resBody: string;
  date: string;
  time: string;
}

const ResponseBubble: React.FC<Props> = ({ resBody, date, time }) => {
  return (
    <div className="flex justify-start">
      {/* Container for response bubble */}
      <div className="flex gap-4 p-2 w-9/12">
        {/* Circle for user avatar */}
        <div className="min-w-8 h-8 bg-black rounded-full"></div>
        {/* Container for response content */}
        <div className="flex flex-col">
          {/* Bubble for response content */}
          <div className="p-4 bg-white rounded-2xl">
            {/* Text content of the response */}
            <p className="text-sm text-black">{resBody}</p>
          </div>
          {/* Footer for the response */}
          <div className="p-2 flex gap-1">
            {/* Footer text */}
            <p className="text-sm text-black">{date},</p>
            <p className="text-sm text-black">{time}</p>
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

export default ResponseBubble;
