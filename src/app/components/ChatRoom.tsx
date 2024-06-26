"use client";
import MessageBubble from "./MessageBubble";
import ResponseBubble from "./ResponseBubble";
import { useState, useEffect } from "react";

interface Message {
  messageBody: string;
  date: string;
  time: string;
  isResponse: boolean;
}

// ChatRoom component renders the chat interface
const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== "undefined") {
      const savedMessages = localStorage.getItem("messages");
      return savedMessages ? JSON.parse(savedMessages) : [];
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const handleMessage = (newMessage: string): void => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const currentDate = new Date().toLocaleDateString();
    const message: Message = {
      messageBody: newMessage,
      date: currentDate,
      time: currentTime,
      isResponse: false,
    };
    setMessages([...messages, message]);
  };

  const handleResponse = (newMessage: string): void => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const currentDate = new Date().toLocaleDateString();
    const message: Message = {
      messageBody: newMessage,
      date: currentDate,
      time: currentTime,
      isResponse: true,
    };
    setMessages([...messages, message]);
  };

  const renderMessages = (): JSX.Element[] => {
    return messages.map((message, index) => (
      <div key={index}>
        {message.isResponse ? (
          <ResponseBubble
            resBody={message.messageBody}
            date={message.date}
            time={message.time}
          />
        ) : (
          <MessageBubble
            messageBody={message.messageBody}
            date={message.date}
            time={message.time}
          />
        )}
      </div>
    ));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const messageBody = formData.get("messageBody");
    if (messageBody) {
      handleMessage(messageBody.toString());
      event.currentTarget.reset();
    }
  };

  return (
    <div className=" flex flex-col h-full w-full lg:w-1/2 text-base-content">
      {/* Chat messages container */}
      <div className="overflow-y-auto p-4 h-full">
        {/* Response bubbles for incoming Response ... Call the handleMessage() on response from api with message body as pram */}
        <ResponseBubble
          resBody="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus deserunt laborum quidem dolores, quasi, repellat quae
              exercitationem, harum quibusdam non dignissimos enim nam
              praesentium et obcaecati ut amet. Est, beatae!"
          date="set date"
          time="set time"
        />

        {/* Outgoing message bubbles */}
        {renderMessages()}
      </div>

      {/* Chat input and action buttons */}
      <footer className="flex justify-between items-start bg-base-200 text-base-content pt-4 px-4 min-h-24 max-h-24">
        <div className="flex items-start justify-between flex-grow gap-4">
          {/* Button to clear chat history */}
          <button className="btn rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              fill="none"
            >
              <g fill="currentColor" clipPath="url(#BroomIcon_svg__a)">
                <path d="M15.05.454a.96.96 0 0 0-1.25.55l-2.55 6.7 1.85.7 2.55-6.7c.2-.5-.05-1.05-.6-1.25ZM13.3 13.254l.9-2.3-5.4-2.05-.9 2.35 5.45 2.05-.05-.05ZM13.8 15.554l-7.75-2.9-5.4 4.15c-.45.35-.5.95-.2 1.35l1.1 1.45c.65.8 1.8 1.2 2.8 1.05.35-.05.8.1 1 .4l.3.35c.65.8 1.8 1.2 2.8 1.05l.55-.1c.35-.05.8.1 1 .4l.05.05c.55.7 1.5 1.1 2.4 1.1.15 0 .3 0 .45-.05.05 0 .1 0 .15-.05l1.45-.45c.5-.15.75-.65.65-1.15l-1.35-6.65Zm8.95.35h-5.4c-.55 0-1 .45-1 1s.45 1 1 1h5.4c.55 0 1-.45 1-1s-.45-1-1-1Zm-1.6 3.7h-3.8c-.55 0-1 .45-1 1s.45 1 1 1h3.8c.55 0 1-.45 1-1s-.45-1-1-1Z"></path>
              </g>
              <defs>
                <clipPath id="BroomIcon_svg__a">
                  <path fill="#fff" d="M0 .154h24v24H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </button>

          {/* Form for user input */}
          <form
            onSubmit={handleFormSubmit}
            className="flex items-start justify-between flex-grow gap-4"
          >
            {/* Text input for user message */}
            <span
              data-count="0 / 2000"
              className=" flex-grow flex flex-col items-end"
            >
              <input
                name="messageBody"
                autoComplete="off"
                placeholder="Ask any question about your document"
                className="border-2 rounded-full px-8 h-12 w-full no-scrollbar"
              />

              {/* Character count */}
              <span>
                <span className="text-sm">0 / 2000</span>
              </span>
            </span>

            {/* Button to submit message */}
            <button type="submit" className="btn rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.31-11.31L107.1,137.58,24,98.22l.14,0L216,40Z"></path>
              </svg>
            </button>
          </form>
        </div>

        {/* Button to toggle chat settings */}
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
