import ChatBubble from "./ChatBubble";
const ChatRoom = () => {
  return (
    <div className="flex flex-col h-full w-full justify-between items-stretch">
      <div className="bg-gray-100 flex-grow p-4">
        <ChatBubble />
      </div>
      <div className=" bg-white p-2">Footer</div>
    </div>
  );
};

export default ChatRoom;
