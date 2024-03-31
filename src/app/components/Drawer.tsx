"use client";
import Document from "./Document";
import { SetStateAction, useState } from "react";

const Drawer = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="drawer drawer-end z-[1]">
      {/* Checkbox input for toggling the drawer */}
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      {/* Main content area */}
      <div className="drawer-content">{/* Page content here */}</div>
      {/* Sidebar */}
      <div className="drawer-side">
        {/* Overlay to close the sidebar */}
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu flex p-4 w-full lg:w-[25rem] h-full bg-base-100">
          {/* Sidebar content here */}
          <div className="flex flex-col justify-start p-2 gap-6 h-[100%]">
            {/* Header  */}
            <div className="flex justify-between items-center">
              <div className="flex p-2 gap-2">
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
                <h2 className="font-semibold">Documents</h2>
              </div>
              {/* Button for Closing Right Drawer */}
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="border-2 p-1 rounded-full cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
                </svg>
              </label>
            </div>
            {/* Search Input  */}
            <label className="input input-bordered flex items-center gap-2 p-2  text-sm border-2">
              <input
                type="text"
                className="grow"
                placeholder="Search for conversation"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </label>
            {/* Tabs Container */}
            <div className="flex rounded-lg justify-between">
              {/* Tab  */}
              <div
                className={`flex ${
                  activeTab === 1 ? "bg-base-300" : " bg-base-100"
                } p-3 gap-2 rounded-l-lg w-1/2`}
                onClick={() => handleTabClick(1)}
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
                    strokeWidth="1.67"
                    d="M11.667 1.89v3.443c0 .466 0 .7.09.878.08.157.208.284.365.364.178.091.411.091.878.091h3.442m.225 1.657v6.01c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273H7.333c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.092-1.092c-.273-.535-.273-1.235-.273-2.635V5.666c0-1.4 0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.093c.535-.272 1.235-.272 2.635-.272h2.677c.611 0 .917 0 1.205.07a2.5 2.5 0 0 1 .722.298c.253.155.469.371.901.804l2.657 2.656c.433.433.649.649.803.901a2.5 2.5 0 0 1 .3.723c.069.288.069.593.069 1.205Z"
                  ></path>
                </svg>
                <p>All Documents</p>
              </div>
              {/* Tab  */}
              <div
                className={`flex ${
                  activeTab === 2 ? " bg-base-300" : " bg-base-100"
                } p-3 gap-2 rounded-r-lg w-1/2`}
                onClick={() => handleTabClick(2)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.67"
                    d="m11.084 5.833-.93-1.859c-.268-.535-.401-.803-.6-.998a1.667 1.667 0 0 0-.624-.385C8.666 2.5 8.367 2.5 7.77 2.5H4.584c-.934 0-1.4 0-1.757.182-.314.16-.569.414-.728.728-.182.357-.182.823-.182 1.757v.666m0 0h12.667c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092c.273.535.273 1.235.273 2.635V13.5c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273H5.917c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092c-.272-.535-.272-1.235-.272-2.635V5.833Z"
                  ></path>
                </svg>
                <p>Knowledge Bases</p>
              </div>
            </div>
            {/* Tabs Content  */}
            <div className="h-full">
              {/* Tab 1 content  */}
              <div
                className={`${
                  activeTab === 1 ? "flex" : "hidden"
                } flex-col h-full justify-between`}
              >
                {/* Render Document Items  */}
                <Document
                  name="Chapter 1 (1)"
                  uploadDate="set date as Uploaded 5 days ago"
                />
              </div>
              {/* Tab 2 content  */}
              <div
                className={`${
                  activeTab === 2 ? "flex" : "hidden"
                } flex-col justify-center h-full items-center`}
              >
                <div className="flex flex-col items-center justify-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="55"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                  </svg>
                  <h1>You're not subscribed</h1>
                  <p className="text-center">
                    This feature requires an active subscription. Click the
                    button below to upgrade your account and access more
                    features
                  </p>
                  <button className="btn border-2 border-neutral-content px-16">
                    Upgrade
                  </button>
                </div>
              </div>
            </div>
            {/* Tabs Footer  */}
            <div className="flex justify-end">
              <button className="btn border-2 border-neutral-content px-4 rounded-lg gap-2">
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
                    d="M3.333 13.535a3.75 3.75 0 0 1 1.733-6.852 5.001 5.001 0 0 1 9.867 0 3.75 3.75 0 0 1 1.734 6.852m-10-.202L10 10m0 0 3.333 3.333M10 10v7.5"
                  ></path>
                </svg>
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
