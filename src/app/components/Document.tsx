import React from "react";

interface Props {
  name: string;
  uploadDate: string;
}

const Document: React.FC<Props> = ({ name, uploadDate }) => {
  return (
    <div className="flex w-full justify-between p-3 bg-base-300 rounded-xl">
      <div className="flex gap-4 flex-grow">
        <input
          type="checkbox"
          className="checkbox size-5 border-base-content"
        />
        <div className="flex flex-col gap-2">
          <p className="">{name}</p>
          <p className=" font-light">{uploadDate}</p>
          <button className="flex text-accent gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216,44H40A20,20,0,0,0,20,64V224A19.82,19.82,0,0,0,31.56,242.1a20.14,20.14,0,0,0,8.49,1.9,19.91,19.91,0,0,0,12.82-4.72l.19-.16L84,212H216a20,20,0,0,0,20-20V64A20,20,0,0,0,216,44Zm-4,144H82.5a20,20,0,0,0-12.87,4.69l-.19.16L44,215.14V68H212Z"></path>
            </svg>
            New Conversation
          </button>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,128,136Zm0-56A32,32,0,1,0,96,48,32,32,0,0,0,128,80Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,128,40Zm0,136a32,32,0,1,0,32,32A32,32,0,0,0,128,176Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,128,216Z"></path>
      </svg>
    </div>
  );
};

export default Document;
