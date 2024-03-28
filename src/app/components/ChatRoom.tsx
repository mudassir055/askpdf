import MessageBubble from "./MessageBubble";
import ResponseBubble from "./ResponseBubble";
const ChatRoom = () => {
  return (
    <div className="flex flex-col h-full w-full ">
      <div className="bg-gray-50 flex-grow p-4">
        <ResponseBubble />
        <MessageBubble />
      </div>
      <footer className="flex justify-between items-start bg-white pt-4 px-4 min-h-16">
        <div className="flex items-start justify-between flex-grow gap-4">
          <button className="bg-yellow-400 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              fill="none"
            >
              <g fill="#000" clip-path="url(#BroomIcon_svg__a)">
                <path d="M15.05.454a.96.96 0 0 0-1.25.55l-2.55 6.7 1.85.7 2.55-6.7c.2-.5-.05-1.05-.6-1.25ZM13.3 13.254l.9-2.3-5.4-2.05-.9 2.35 5.45 2.05-.05-.05ZM13.8 15.554l-7.75-2.9-5.4 4.15c-.45.35-.5.95-.2 1.35l1.1 1.45c.65.8 1.8 1.2 2.8 1.05.35-.05.8.1 1 .4l.3.35c.65.8 1.8 1.2 2.8 1.05l.55-.1c.35-.05.8.1 1 .4l.05.05c.55.7 1.5 1.1 2.4 1.1.15 0 .3 0 .45-.05.05 0 .1 0 .15-.05l1.45-.45c.5-.15.75-.65.65-1.15l-1.35-6.65Zm8.95.35h-5.4c-.55 0-1 .45-1 1s.45 1 1 1h5.4c.55 0 1-.45 1-1s-.45-1-1-1Zm-1.6 3.7h-3.8c-.55 0-1 .45-1 1s.45 1 1 1h3.8c.55 0 1-.45 1-1s-.45-1-1-1Z"></path>
              </g>
              <defs>
                <clipPath id="BroomIcon_svg__a">
                  <path fill="#fff" d="M0 .154h24v24H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </button>
          <form className="flex items-start justify-between flex-grow gap-4">
            <span
              data-count="0 / 2000"
              className=" flex-grow flex flex-col items-end"
            >
              <textarea
                placeholder="Ask any question about your document"
                className=" bg-white border-2 rounded-full px-8 pt-2 h-12 w-full"
              ></textarea>
              <span>
                <span className="text-sm">0 / 2000</span>
              </span>
            </span>
            <button type="submit" className="bg-black rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFFFFF"
                viewBox="0 0 256 256"
              >
                <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.31-11.31L107.1,137.58,24,98.22l.14,0L216,40Z"></path>
              </svg>
            </button>
          </form>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"
              opacity="0.2"
            ></path>
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z"></path>
          </svg>
        </button>
      </footer>
    </div>
  );
};

export default ChatRoom;
