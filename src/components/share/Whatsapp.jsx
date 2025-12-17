import { useState } from 'react';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex fixed bottom-16 right-16 bg-green-500 text-center gap-2 text-white p-2 rounded-full shadow-lg"
        onClick={toggleChat}
      >
        <FaWhatsapp size={36} />
      </button>

      {isChatOpen && (
        <div className="fixed bottom-16 right-4 w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
          <div className="flex justify-between items-center p-4 bg-gray-200">
            <h2 className="text-lg font-bold">Chat</h2>
            <button onClick={toggleChat}>
              <FaTimes size={24} />
            </button>
          </div>
          <div className="flex-grow p-4 bg-gray-100 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 my-2 rounded-lg ${
                  message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="p-4 bg-white flex">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
            />
            <button
              className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Whatsapp;