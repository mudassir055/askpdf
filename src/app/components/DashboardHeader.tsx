"use client";
import Link from "next/link";
import Drawer from "./Drawer";

// DashboardHeader component
const DashboardHeader = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="flex flex-col h-[14%]">
      {/* Header section */}
      <header className="flex justify-between w-full pb-2 pt-3 pl-8 pr-8">
        {/* Left section of the header */}
        <div className="flex items-center justify-center gap-4">
          {/* Button for toggling drawer on small screens */}
          <button className="lg:hidden" onClick={() => handleGoBack()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="none"
            >
              <circle
                cx="23.934"
                cy="23.934"
                r="20.934"
                fill="#2C2C2C"
              ></circle>
              <circle
                cx="23.934"
                cy="23.934"
                r="22.066"
                stroke="#fff"
                strokeOpacity="0.26"
                strokeWidth="2.263"
              ></circle>
              <g fill="#fff" fillRule="evenodd" clipRule="evenodd">
                <path d="M34.16 11.209c-.702.952-2.127 2.59-3.11 3.574-1.116 1.116-2.36 2.191-3.486 3.01l-.632.459.168.246c1.468 2.149 1.953 4.239 1.596 6.875a19.823 19.823 0 0 1-.294 1.604c-.098.41-.17.756-.158.767.04.04.377-.487.552-.861.53-1.135.808-2.54.804-4.063l-.003-.978 1.858-1.872c2.017-2.032 2.908-2.995 3.365-3.636l.293-.41-.033-1a21.394 21.394 0 0 0-.127-1.704c-.1-.756-.35-1.957-.461-2.213l-.068-.157-.264.359Zm-18.129 1.2c-.993.142-2.01.666-2.795 1.443-.859.847-1.345 1.883-1.47 3.13-.038.369-.052 2.706-.038 6.258.018 4.923.034 5.72.114 6.053.45 1.85 1.679 3.259 3.19 3.658.194.051.498.11.676.13.178.02.396.05.484.067l.16.031.016 1.92.016 1.92 1.897-1.888 1.896-1.888.601-.01c.958-.016 1.724-.238 2.648-.766 1.192-.682 2.388-1.851 3.222-3.148.204-.32.708-1.382.862-1.82.322-.918.61-2.635.436-2.607-.025.003-2.973.003-6.553 0l-6.508-.007v-5.641h5.76c3.167 0 5.758-.017 5.758-.036 0-.02-.152-.264-.338-.543-.186-.28-.346-.527-.356-.549-.01-.022.545-.521 1.234-1.11l2.599-2.218 1.346-1.15-.23-.199c-.334-.289-1.157-.722-1.699-.893l-.47-.149-6.14-.006c-3.378-.004-6.22.004-6.318.018Zm20.546 2.844c-1.15 1.81-2.403 3.295-4.688 5.557l-1.435 1.42-.057.666c-.095 1.106-.224 1.995-.375 2.594-.346 1.363-1.046 2.673-2.185 4.088-.682.848-.712.943-.136.442.82-.714 1.741-1.805 2.344-2.777.663-1.07 1.233-2.494 1.368-3.423l.07-.48.325-.24c.289-.214 1.869-1.495 2.035-1.651.036-.033.26-.233.5-.442 1.365-1.2 2.63-2.532 2.64-2.783.022-.507.02-3.564-.002-3.563-.017.001-.198.267-.404.592Zm2.284 2.063a52.938 52.938 0 0 1-2.129 2.603c-1.157 1.291-3.016 3.009-4.285 3.958-.321.24-.334.26-.405.643-.424 2.286-2.393 4.728-5.441 6.748-.457.303-.848.55-.868.55-.02 0-.136.065-.257.143-.12.078-.55.316-.953.528-.817.429-.802.46.146.296 2.724-.471 5.29-1.616 7.552-3.368 1.022-.793 2.526-2.372 3.215-3.377.137-.2.274-.392.305-.429.19-.225 1.22-2.024 1.627-2.842.843-1.696 1.282-2.953 1.6-4.583.222-1.13.238-1.235.193-1.232-.02.001-.154.164-.3.362Zm-22.126 3.29c-.018.047-.025.877-.016 1.844l.017 1.759.427.017.425.017V22.898l.515-.02c.669-.028 1.007-.182 1.23-.563a1.158 1.158 0 0 0-.197-1.437c-.265-.252-.462-.296-1.444-.328-.773-.024-.93-.015-.957.056Zm3.557 1.789v1.859l.936-.027c.907-.026.947-.033 1.316-.214.687-.339.98-.833.98-1.655 0-.49-.123-.857-.392-1.171-.409-.478-.985-.65-2.18-.65l-.66-.001v1.859Zm4.093-1.82c-.021.022-.039.856-.039 1.854v1.814l.426-.017.426-.017.017-.75.016-.749h1.113v-.646h-1.116v-.823H26.697v-.705H25.56c-.625 0-1.154.018-1.175.04Zm-6.797 1.16v.505h.286c.156 0 .364-.027.462-.061.3-.105.406-.513.2-.767-.093-.115-.178-.14-.53-.16l-.418-.024v.506Zm3.526.652v1.087h.339c.816 0 1.209-.353 1.21-1.089.002-.715-.392-1.085-1.156-1.085h-.393v1.087Z"></path>
                <path d="m30.494 22.202.987 1.23-.057.39c-.135.928-.705 2.354-1.368 3.422-.603.973-1.524 2.064-2.345 2.778-.575.5-.545.405.137-.442 1.139-1.415 1.839-2.725 2.184-4.088.152-.599.281-1.488.376-2.594l.057-.667.03-.029Zm-3.31-4.123 2.755 3.431-.331.333.003.978c.004 1.524-.274 2.928-.804 4.063-.175.375-.513.901-.552.861-.011-.01.06-.356.158-.766.098-.41.23-1.133.294-1.604.357-2.636-.128-4.726-1.596-6.875l-.168-.246.24-.175Z"></path>
              </g>
              <circle
                cx="40.342"
                cy="39.211"
                r="5.092"
                fill="#008C25"
                stroke="#fff"
                strokeWidth="1.132"
              ></circle>
            </svg>
            <div>
              <h2 className="font-semibold">AskYourPDF</h2>
            </div>
          </div>
        </div>

        {/* Right section of the header */}
        <div className="flex items-center justify-center gap-4">
          {/* Language dropdown */}
          <div>
            <div className="dropdown dropdown-end">
              {/* Language dropdown button */}
              <div tabIndex={0} role="button">
                <div className="hidden btn lg:flex lg:justify-center items-center gap-2 p-2 pl-4 pr-4 rounded-2xl border-2 border-neutral-content">
                  <span className="font-semibold">EN </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z"></path>
                  </svg>
                </div>
              </div>
              {/* Language dropdown options */}
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-1 shadow bg-base-100 w-52 mt-4 rounded-lg"
              >
                <li>
                  <label className="label cursor-pointer flex justify-start">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-slate-400"
                    />
                    <span className="label-text">Blue pill</span>
                  </label>
                </li>
                <li>
                  <label className="label cursor-pointer flex justify-start">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-slate-400"
                    />
                    <span className="label-text">Blue pill</span>
                  </label>
                </li>
                <li>
                  <label className="label cursor-pointer flex justify-start">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-slate-400"
                    />
                    <span className="label-text">Blue pill</span>
                  </label>
                </li>
                <li>
                  <label className="label cursor-pointer flex justify-start">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-slate-400"
                    />
                    <span className="label-text">Blue pill</span>
                  </label>
                </li>
                <li>
                  <label className="label cursor-pointer flex justify-start">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-slate-400"
                    />
                    <span className="label-text">Blue pill</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>

          {/* Button to toggle drawer on large screens */}
          <label
            htmlFor="my-drawer-4"
            className="hidden btn lg:flex items-center justify-center gap-2 rounded-lg border-neutral-content border-2 px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.667"
                d="M12.5 2.5v15m-6-15h7c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C17.5 4.4 17.5 5.1 17.5 6.5v7c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273h-7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2.5 15.6 2.5 14.9 2.5 13.5v-7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C4.4 2.5 5.1 2.5 6.5 2.5Z"
              ></path>
            </svg>
            <p className=" lg:block">Documents</p>
          </label>

          {/* Right Menu dropdown */}
          <div className="dropdown dropdown-end">
            {/* Dropdown Button */}
            <div tabIndex={0} role="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Zm0-64A32,32,0,1,0,96,48,32,32,0,0,0,128,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,128,32Zm0,144a32,32,0,1,0,32,32A32,32,0,0,0,128,176Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,224Z"></path>
              </svg>
            </div>

            {/* Dropdown options */}
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-1 shadow w-52 mt-5 rounded-lg bg-base-100"
            >
              <li className="  font-medium ">
                <Link href={"#"}>Share </Link>
              </li>
              <li className="  font-medium ">
                <Link href={"#"}>Copy Id</Link>
              </li>
              <li className=" font-medium ">
                <Link href={"#"}>Export Chat as PDF</Link>
              </li>
              <li className="  font-medium">
                <Link href={"#"}>Delete</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Subheader PDF Name */}
      <div className="bg-base-200 flex p-2 justify-center items-center">
        <p className="text-xs font-normal text-base-content">
          Ask me about Chapter 1 (1).pdf
          <label
            htmlFor="my-drawer-4"
            className="ml-2 cursor-pointer font-semibold"
          >
            View Doc
          </label>
        </p>
      </div>
      {/* Drawer component */}
      <Drawer />
    </div>
  );
};

export default DashboardHeader;
