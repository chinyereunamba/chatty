import { FaStar } from "react-icons/fa6";
import PageContainer from "../components/PageContainer";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import Message from "../components/Message";
import useAuthStore from "../store";

const Home = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState<string[]>([]);
  const {user} = useAuthStore()
  const [textareaInFocus, setTextareaInFocus] = useState(false);

  const handleSend = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent default newline action
      if (message.trim()) {
        setMessageList([...messageList, message]);
        console.log(messageList);
        setMessage("");
      }
    }
  };
  return (
    <div>
      <PageContainer
        header={
          <>
            <div className="flex items-center gap-4">
              <h3 className="text-3xl">Intro</h3>
              <p className="text-teal-400">Online</p>
            </div>
            <div>
              <FaStar size={20} />
            </div>
          </>
        }
      >
        <div
          id="messages"
          className="max-h-[calc(100vh-260px)] h-full scroll-smooth overflow-scroll flex flex-col gap-3"
        >
          {messageList.map((message, index) => (
            <Message message={message} time="Just now" key={index} />
          ))}
        </div>

        <div
          className={`${
            textareaInFocus
              ? "border-teal-500 bg-[#3F3F46]"
              : "border-[#3F3F46]"
          } flex gap-4 absolute w-[calc(100%-4rem)] transition-colors duration-300 bottom-8 items-end rounded-md border max-h-20 h-max scroll-auto pr-3 py-2 `}
        >
          <textarea
            className="w-full focus:outline-none px-4 bg-transparent py-3 rounded-md resize-none "
            name="message"
            id="message"
            placeholder="Type a message"
            autoFocus
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            onFocus={() => setTextareaInFocus(true)}
            onBlur={() => setTextareaInFocus(false)}
            onKeyDown={handleSend}
          ></textarea>
          <button
            type="button"
            className="p-3 bg-teal-800 rounded-md"
            onClick={() => handleSend}
          >
            <FiSend size={22} />
          </button>
        </div>
      </PageContainer>
    </div>
  );
};

export default Home;
