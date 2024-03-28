"use client";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="hidden lg:flex">
      <div className="lg:min-h-full lg:bg-black lg:w-20 lg:flex lg:flex-col lg:justify-between lg:items-center lg:p-4 lg:z-10">
        <div className="flex flex-col items-center gap-2">
          <Link href={"/"}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
              >
                <path
                  fill="#EDB01A"
                  fill-rule="evenodd"
                  d="M26.148.438c-.819 1.165-2.479 3.167-3.625 4.37-1.3 1.366-2.75 2.68-4.062 3.682l-.737.561.196.301c1.711 2.628 2.277 5.184 1.86 8.408a25.309 25.309 0 0 1-.342 1.96c-.115.503-.198.925-.185.939.047.048.44-.595.644-1.053.618-1.388.942-3.106.937-4.97l-.004-1.195 2.166-2.29c2.35-2.483 3.39-3.661 3.921-4.445l.342-.503-.038-1.221a27.384 27.384 0 0 0-.148-2.084c-.118-.924-.41-2.393-.538-2.707L26.456 0l-.308.438ZM5.021 1.906c-1.157.173-2.342.815-3.258 1.764C.763 4.707.196 5.973.05 7.497c-.043.452-.06 3.31-.044 7.654.022 6.02.04 6.995.134 7.402.523 2.261 1.955 3.985 3.717 4.473.226.063.58.134.788.16.207.024.46.061.564.082l.187.038.018 2.347L5.432 32l2.21-2.308 2.21-2.308.701-.012c1.116-.02 2.01-.291 3.085-.938 1.39-.834 2.784-2.263 3.755-3.85.239-.39.826-1.69 1.005-2.224.376-1.123.71-3.223.508-3.19-.028.005-3.464.005-7.636 0l-7.584-.008v-6.898h6.711c3.691 0 6.711-.02 6.711-.043 0-.024-.177-.323-.393-.665a21.793 21.793 0 0 1-.416-.67c-.011-.028.636-.638 1.439-1.358l3.028-2.713 1.569-1.406-.268-.243c-.389-.354-1.348-.883-1.98-1.093l-.548-.181-7.156-.008c-3.936-.005-7.249.005-7.362.022Zm23.944 3.478c-1.34 2.213-2.8 4.03-5.464 6.795l-1.672 1.736-.066.815c-.11 1.353-.26 2.44-.438 3.172-.403 1.667-1.218 3.269-2.546 5-.795 1.036-.829 1.153-.159.54.957-.873 2.03-2.207 2.733-3.396.773-1.308 1.436-3.05 1.594-4.186l.081-.586.379-.294c.337-.261 2.178-1.829 2.372-2.02.041-.04.303-.284.582-.54 1.591-1.466 3.065-3.096 3.078-3.403.024-.62.021-4.358-.004-4.357-.019.001-.23.327-.47.724Zm2.662 2.522c-.479.683-1.87 2.468-2.481 3.184-1.349 1.579-3.516 3.68-4.994 4.84-.374.294-.389.319-.472.786-.494 2.796-2.789 5.782-6.341 8.252-.533.37-.988.674-1.012.674-.024 0-.158.078-.299.174-.14.095-.64.386-1.111.645-.952.525-.934.563.171.362 3.174-.576 6.164-1.975 8.8-4.119 1.191-.968 2.944-2.9 3.747-4.13.16-.243.32-.479.356-.524.221-.274 1.422-2.474 1.896-3.475.982-2.074 1.494-3.611 1.865-5.605.258-1.382.277-1.51.225-1.506-.023.001-.18.2-.35.442ZM5.842 11.93c-.021.057-.03 1.072-.019 2.255l.02 2.15.496.022.497.021v-1.645l.6-.025c.779-.034 1.173-.222 1.433-.688a1.467 1.467 0 0 0-.23-1.758c-.309-.307-.538-.362-1.682-.4-.901-.03-1.083-.02-1.115.068Zm4.144 2.188v2.273l1.09-.033c1.059-.032 1.105-.04 1.534-.262.802-.414 1.143-1.018 1.143-2.024 0-.598-.144-1.048-.457-1.432-.476-.584-1.148-.794-2.54-.795h-.77v2.273Zm4.771-2.226c-.025.027-.046 1.047-.046 2.267v2.219l.497-.021.496-.021.02-.916.019-.917H17.04v-.79H15.739v-1.006h1.712v-.863h-1.324c-.728 0-1.345.022-1.37.048ZM6.836 13.31v.618h.332c.183 0 .425-.034.539-.075.349-.128.473-.627.233-.938-.108-.14-.208-.171-.616-.195l-.488-.03v.62Zm4.109.798v1.33h.394c.952 0 1.41-.432 1.411-1.332.002-.875-.458-1.327-1.347-1.327h-.458v1.33Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#EDB01A"
                  fill-rule="evenodd"
                  d="m21.876 13.882 1.15 1.503-.066.477c-.158 1.136-.822 2.878-1.594 4.185-.703 1.19-1.776 2.523-2.733 3.397-.67.612-.636.496.159-.54 1.327-1.732 2.143-3.333 2.546-5 .177-.732.327-1.82.437-3.172l.067-.815.034-.035Zm-3.858-5.043 3.21 4.196-.385.408.003 1.196c.005 1.863-.318 3.58-.936 4.968-.204.458-.598 1.102-.644 1.053-.013-.013.07-.435.184-.938.115-.502.27-1.384.344-1.96.416-3.225-.15-5.78-1.861-8.408l-.196-.301.28-.214Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>
          <ul className="p-4 bg-black text-white flex flex-col justify-start items-center gap-3">
            <li>
              <Link href={"/Dashboard"}>
                <button
                  className="hover:bg-gray-800 p-2 rounded-lg transition-all"
                  onClick={toggleDrawer}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.622"
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z"
                    ></path>
                  </svg>
                </button>
              </Link>
            </li>
            <li>
              <Link href={"/dashboard"}>
                <button className="hover:bg-gray-800 p-2 rounded-lg transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FFFFFF"
                    viewBox="0 0 256 256"
                  >
                    <path d="M93.31,70,28,128l65.27,58a8,8,0,1,1-10.62,12l-72-64a8,8,0,0,1,0-12l72-64A8,8,0,1,1,93.31,70Zm152,52-72-64a8,8,0,0,0-10.62,12L228,128l-65.27,58a8,8,0,1,0,10.62,12l72-64a8,8,0,0,0,0-12Z"></path>
                  </svg>
                </button>
              </Link>
            </li>
            <li>
              <Link href={"/dashboard"}>
                <button className="hover:bg-gray-800 p-2 rounded-lg transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FFFFFF"
                    viewBox="0 0 256 256"
                  >
                    <path d="M248,128a87.34,87.34,0,0,1-17.6,52.81,8,8,0,1,1-12.8-9.62A71.34,71.34,0,0,0,232,128a72,72,0,0,0-144,0,8,8,0,0,1-16,0,88,88,0,0,1,3.29-23.88C74.2,104,73.1,104,72,104a48,48,0,0,0,0,96H96a8,8,0,0,1,0,16H72A64,64,0,1,1,81.29,88.68,88,88,0,0,1,248,128Zm-90.34-5.66a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L144,147.31V208a8,8,0,0,0,16,0V147.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z"></path>
                  </svg>
                </button>
              </Link>
            </li>
            <li>
              <Link href={"/dashboard"}>
                <button className="hover:bg-gray-800 p-2 rounded-lg transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FFFFFF"
                    viewBox="0 0 256 256"
                  >
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"></path>
                  </svg>
                </button>
              </Link>
            </li>
            <li>
              <Link href={"/dashboard"}>
                <button className="hover:bg-gray-800 p-2 rounded-lg transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FFFFFF"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.28,34.75a64,64,0,0,0-90.49,0L60.69,104A15.9,15.9,0,0,0,56,115.31v73.38L26.34,218.34a8,8,0,0,0,11.32,11.32L67.32,200H140.7A15.92,15.92,0,0,0,152,195.32l0,0,69.23-70A64,64,0,0,0,221.28,34.75ZM142.07,46.06A48,48,0,0,1,211.79,112H155.33l34.35-34.34a8,8,0,0,0-11.32-11.32L120,124.69V67.87ZM72,115.35l32-31.67v57l-32,32ZM140.7,184H83.32l56-56h56.74Z"></path>
                  </svg>
                </button>
              </Link>
            </li>
            <li>
              <Link href={"/dashboard"}>
                <button className="hover:bg-gray-800 p-2 rounded-lg transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#FFFFFF"
                    viewBox="0 0 256 256"
                  >
                    <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                  </svg>
                </button>
              </Link>
            </li>
            <li>
              <Link href={"/dashboard"}>
                <button className="hover:bg-gray-800 p-2 rounded-lg transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <g fill="#fff" clip-path="url(#Tools_svg__a)">
                      <path d="m15.45 12.3-1.35 1.35L15.45 15l-1.8 1.8 6.45 6.45c.9.9 2.25.9 3.15 0 .9-.9.9-2.25 0-3.15l-7.8-7.8Zm5.85 10.2c-.6 0-1.2-.45-1.2-1.2 0-.6.45-1.2 1.2-1.2s1.2.45 1.2 1.2-.45 1.2-1.2 1.2ZM5.4 12l1.35-.9L9 8.55l1.35 1.35 1.35-1.35-.15-.15c.3-.75.45-1.5.45-2.4 0-3.3-2.7-6-6-6-.9 0-1.65.15-2.4.45L7.95 4.8 4.8 7.95.45 3.6C.15 4.35 0 5.1 0 6c0 3.15 2.4 5.55 5.4 6Z"></path>
                      <path d="m12 16.2 1.35-1.2L12 13.65l8.55-8.55 1.8-.6L24 1.2 22.95.15l-3.45 1.5-.75 1.8-8.4 8.55L9 10.65 7.8 12s1.2.9-.15 2.25c-.75.75-1.95-.15-4.2 2.1L.3 19.5s-.9 1.5.9 3.3c1.8 1.8 3.3.9 3.3.9l3.15-3.15C9.75 18.45 9 17.1 9.6 16.5c1.35-1.35 2.4-.3 2.4-.3Zm-4.65-.6 1.05 1.05-5.7 5.7-1.05-1.05 5.7-5.7Z"></path>
                    </g>
                    <defs>
                      <clipPath id="Tools_svg__a">
                        <path fill="#fff" d="M0 0h24v24H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <ul className="p-4 bg-black text-white flex flex-col justify-start items-center gap-3 pb-0">
          <li>
            <Link href={"/dashboard"}>
              <button className="hover:bg-gray-800 p-2 rounded-lg transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H10m2-7v1m0 6v1m6-4h.01M6 12h.01M2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 17.48 22 16.92 22 15.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2ZM18.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-12 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                  ></path>
                </svg>
              </button>
            </Link>
          </li>
          <li>
            <Link href={"/dashboard"}>
              <button className="hover:bg-gray-800 p-2 rounded-lg transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
                  ></path>
                </svg>
              </button>
            </Link>
          </li>
          <li>
            <Link href={"/dashboard"}>
              <button className="hover:bg-gray-800 p-2 rounded-lg transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <g
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    clip-path="url(#Settings_svg__a)"
                  >
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a1.998 1.998 0 0 1 0 2.83 1.998 1.998 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a1.998 1.998 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 3.417 1.415 2 2 0 0 1-.587 1.415l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"></path>
                  </g>
                  <defs>
                    <clipPath id="Settings_svg__a">
                      <path fill="#fff" d="M0 0h24v24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </Link>
          </li>
          <li>
            <Link href={"/dashboard"}>
              <button className="hover:bg-gray-800 p-2 rounded-lg transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#EAEAEA"
                    d="M24 11.997a11.956 11.956 0 0 1-3.766 8.727l-.044.042-.017.015a11.917 11.917 0 0 1-3.007 2.049l-.27.126c-1.365.61-2.83.958-4.323 1.027h-.042a12.632 12.632 0 0 1-1.065 0h-.042a11.913 11.913 0 0 1-4.47-1.094l-.123-.059a11.72 11.72 0 0 1-2.033-1.23c-.333-.25-.652-.517-.956-.8l-.018-.016-.085-.081a.253.253 0 0 1-.03-.027l-.07-.068A12 12 0 1 1 24 11.998Z"
                  ></path>
                  <path
                    stroke="#101828"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.661"
                    d="M16.949 17.626V16.27a2.709 2.709 0 0 0-2.71-2.709H8.823a2.709 2.709 0 0 0-2.709 2.71v1.354m8.127-9.481a2.709 2.709 0 1 1-5.418 0 2.709 2.709 0 0 1 5.418 0Z"
                  ></path>
                </svg>
              </button>
            </Link>
          </li>
          <li>
            <Link href={"/dashboard"}>
              <button className="hover:bg-gray-800 p-2 rounded-lg transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  fill="none"
                >
                  <path
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 21.995H5a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h4m7 14 5-5m0 0-5-5m5 5H9"
                  ></path>
                </svg>
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`Drawer ${
          isDrawerOpen ? "w-96" : "w-0 overflow-hidden"
        } bg-gray-50 transition-all`}
      >
        <header className="flex justify-between items-center p-4 w-full">
          <div className="flex w-[50%] gap-2">
            <h1 className=" text-black font-semibold">ASKYOURPDF</h1>
            <div className="flex items-center bg-green-100 text-green-600 rounded-full px-2 text-[12px]">
              Free
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 w-[50%]">
            <button className="bg-black text-yellow-500 rounded-lg px-6 py-2">
              Upgrade
            </button>
            <button
              className="flex items-center justify-center p-2 hover:bg-gray-200 text-black rounded-lg transition-all"
              onClick={toggleDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
              </svg>
            </button>
          </div>
        </header>
        <div className="flex items-center justify-center p-3 bg-orange-100 text-sm text-black">
          <div>Upgrade to access more features</div>
        </div>
        <div className="flex flex-col items-center justify-center p-4 gap-4">
          <div className="flex items-center justify-between px-4 py-2 w-full border-2 rounded-lg">
            <input
              className="bg-transparent text-sm"
              placeholder="Search for conversation"
              type="text"
              value=""
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </span>
          </div>
          <button className="flex items-center justify-center py-3 bg-black text-white rounded-lg w-full">
            +New Conversation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
