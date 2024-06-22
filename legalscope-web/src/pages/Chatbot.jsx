import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Chatbot profile information
  const botProfile = {
    name: 'Scoppers',
    profilePicUrl: 'https://thumbs.dreamstime.com/b/cartoon-judge-gavel-illustration-holding-51384196.jpg',
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');
      // Simulate chatbot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'Ini adalah respon dari chatbot.' }
        ]);
      }, 1000);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Section Judul */}
      <div className="container mx-auto flex justify-between items-center py-4 bg-gradient-to-r from-red-900 to-purple-900 rounded-md mb-6 md:mb-0 md:mt-6 relative">
        <div>
          <div className="md:hidden bg-gray-900/75 top-0 left-0 w-full h-full absolute"></div>
        </div>
        <div className="m-8 z-20 text-right">
          <h1 className="text-4xl font-bold text-white">Tanya Scopper!</h1>
          <div className="max-w-2xl">
            <p className="mt-2 text-gray-100">
              Tanyakan masalah atau mencari hukum atau undang-undang peraturan mudah dan cepat dengan bantu KimAI kami!
            </p>
          </div>
        </div>
      </div>

      <br></br>

      {/* Sidebar dan Main Content */}
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Sidebar */}
        <div className="w-full md:w-1/5 bg-white shadow-lg rounded-lg mb-4 md:mb-0">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Sidebar</h2>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
                onClick={handleNewChat}
              >
                New Chat
              </button>
            </div>
          </div>
        </div>

        {/* Main Content (Chatbot Area) */}
        <div className="w-full md:w-4/5 max-w-full bg-white rounded-lg shadow-lg p-4 flex flex-col">
          <div className="flex items-center mb-4">
            <img
              src={botProfile.profilePicUrl}
              alt={botProfile.name}
              className="w-10 h-10 rounded-full mr-2"
            />
            <div>
              <p className="font-semibold text-gray-800">{botProfile.name}</p>
              <p className="text-sm text-gray-600">AI Chatbot</p>
            </div>
          </div>
          <div className="overflow-y-auto flex-1 mb-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.sender === 'bot' && (
                  <div className="flex items-end">
                    <img
                      src={botProfile.profilePicUrl}
                      alt={botProfile.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div className="bg-gray-300 px-4 py-2 rounded-lg">
                      <p className="text-gray-900">{message.text}</p>
                    </div>
                  </div>
                )}
                {message.sender === 'user' && (
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    <p>{message.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-between">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              className="bg-red-900 text-white px-4 py-2 rounded-r-lg"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
