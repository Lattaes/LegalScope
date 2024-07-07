import React, { useState } from 'react';
import backgroundImage from '../assets/purple-hero.jpg';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [remainingChats, setRemainingChats] = useState(5);
  const [usedChats, setUsedChats] = useState(0);

  // Chatbot profile information
  const botProfile = {
    name: 'Scoppers',
    profilePicUrl: 'https://thumbs.dreamstime.com/b/cartoon-judge-gavel-illustration-holding-51384196.jpg',
  };

  const handleSend = () => {
    if (message.trim()) {
      const newMessage = { sender: 'user', text: message };
      const newChatHistory = [...chatHistory, newMessage];
      setChatHistory(newChatHistory);
      setMessage('');

      setTimeout(() => {
        const botResponse = getBotResponse(message);
        const newChatHistoryWithBotResponse = [...newChatHistory, { sender: 'bot', text: botResponse }];
        setChatHistory(newChatHistoryWithBotResponse);
      }, 1000);
    }
  };

  const getBotResponse = (userMessage) => {
    // Logika sederhana untuk bot merespon
    if (userMessage.toLowerCase().includes('halo')) {
      return 'Halo! Ada yang bisa saya bantu?';
    } else if (userMessage.toLowerCase().includes('siapa kamu')) {
      return 'Saya adalah scoopie cutie yang akan menjawab pertanyaan Anda.';
    } else {
      return 'Maaf, saya tidak mengerti pertanyaan Anda. Bisa diulang?';
    }
  };

  const handleNewChat = () => {
    if (remainingChats > 0) {
      setChatHistory([]);
      setRemainingChats(remainingChats - 1);
      setUsedChats(usedChats + 1);
    }
  };

  return (
    <main className="flex-1 flex overflow-x-hidden bg-customNavy">
      <div className="flex-1 flex">
        <div className="mx-auto sm:px-6 lg:px-8 px-4 py-6 max-w-screen-xl w-full flex flex-col gap-6">
          {/* Title Section */}
          <div
            className="w-full relative overflow-hidden rounded-lg p-4 bg-customBeige flex flex-col justify-end mt-24"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="m-8 z-[20]">
              <h1 className="text-4xl font-bold text-white">Chatbot Interaktif</h1>
              <div className="max-auto">
                <p className="mt-8 text-gray-100">Chatbot kami siap membantu Anda dengan pertanyaan hukum yang Anda miliki. Mulai percakapan sekarang untuk mendapatkan bantuan langsung.</p>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div>
            <div className="w-full relative overflow-hidden rounded-lg p-4 bg-customBeige text-white dark:text-gray-900">
              <div className="flex gap-3 items-start">
                <span className="i-uil-info-circle flex-shrink-0 w-5 h-5"></span>
                <div className="w-0 flex-1">
                  <div className="text-sm opacity-90 mt-0 leading-5">Data diambil dari sumber terpercaya</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <div className="p-4 bg-white shadow-md rounded-md">
                <h3 className="text-lg font-bold">Tanya Scoopie</h3>
                <div className="mt-2">
                  <div className="flex justify-between">
                    <span>Free Trial</span>
                    <span>5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tersisa</span>
                    <span>{remainingChats}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chat Terpakai</span>
                    <span>{usedChats}</span>
                  </div>
                  <button 
                    className={`mt-4 px-4 py-2 rounded-md ${remainingChats === 0 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white`} 
                    onClick={handleNewChat}
                    disabled={remainingChats === 0}
                  >
                    New Chat
                  </button>
                </div>
              </div>
            </div>

            {/* Chatbot Section */}
            <div className="p-4 bg-white shadow-md rounded-md md:col-span-3 space-y-4">
              <div className="h-64 overflow-y-auto bg-gray-100 p-4 rounded-md">
                {chatHistory.map((message, index) => (
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
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 p-2 border rounded-md"
                  placeholder="Ketik pertanyaan Anda..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleSend}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chatbot;
