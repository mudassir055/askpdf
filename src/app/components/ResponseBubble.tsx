import React from "react";

const ResponseBubble = () => {
  return (
    <div className="flex justify-start">
      <div className="flex gap-4 p-2 w-9/12">
        <div className="min-w-8 h-8 bg-black rounded-full"></div>
        <div className="flex flex-col">
          <div className="p-4 bg-white rounded-2xl">
            <p className="text-sm text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus deserunt laborum quidem dolores, quasi, repellat quae
              exercitationem, harum quibusdam non dignissimos enim nam
              praesentium et obcaecati ut amet. Est, beatae!
            </p>
          </div>
          <div className="p-2">
            <p className="text-sm text-black">Message Footer</p>
          </div>
        </div>
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
