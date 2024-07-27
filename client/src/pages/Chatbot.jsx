import { useState } from "react";
import backgroundImage from "../assets/purple-hero.jpg";
import axios from "axios";
import Footer from "./../components/Footer";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [remainingChats, setRemainingChats] = useState(5);
  const [usedChats, setUsedChats] = useState(0);
  const [sessions, setSessions] = useState([]);
  const [selectedSessionIndex, setSelectedSessionIndex] = useState(null);

  // Chatbot profile information
  const botProfile = {
    name: "LegalGenie",
    profilePicUrl:
      "https://thumbs.dreamstime.com/b/cartoon-judge-gavel-illustration-holding-51384196.jpg",
  };

  const handleSend = async () => {
    if (message.trim()) {
      const newMessage = { sender: "user", text: message };
      const updatedChatHistory = [...chatHistory, newMessage];
      setChatHistory(updatedChatHistory);
      setMessage(""); // Clear input field after sending message

      try {
        const response = await axios.post(
          "http://localhost:5000/chat",
          { message },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true, // Set to true if you need to include credentials such as cookies
          },
        );

        const botMessage = { sender: "bot", text: response.data.response };
        setChatHistory([...updatedChatHistory, botMessage]);

        if (selectedSessionIndex !== null) {
          // Update the selected session's history
          const updatedSessions = [...sessions];
          updatedSessions[selectedSessionIndex].history = [...updatedChatHistory, botMessage];
          setSessions(updatedSessions);
        }
      } catch (error) {
        console.log("Response 404: ", error);
        const errorMessage = {
          sender: "bot",
          text: "Maaf, saya tidak bisa memproses pertanyaan mu.",
        };
        setChatHistory([...updatedChatHistory, errorMessage]);

        if (selectedSessionIndex !== null) {
          const updatedSessions = [...sessions];
          updatedSessions[selectedSessionIndex].history = [...updatedChatHistory, errorMessage];
          setSessions(updatedSessions);
        }
      }
    }
  };

  const handleNewChat = () => {
    if (remainingChats > 0) {
      const newSession = {
        id: Date.now(), // Unique identifier for the session
        history: [...chatHistory],
      };
      setSessions([...sessions, newSession]);
      setChatHistory([]);
      setRemainingChats(remainingChats - 1);
      setUsedChats(usedChats + 1);
    }
  };

  const handleSelectSession = (index) => {
    setSelectedSessionIndex(index);
    setChatHistory(sessions[index].history);
  };

  return (
    <main className="bg-customNavy flex flex-1 flex-col overflow-x-hidden">
      <div className="flex flex-1">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div
            className="bg-customBeige relative mt-24 flex w-full flex-col justify-end overflow-hidden rounded-lg p-4"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="z-20 m-8">
              <h1 className="text-4xl font-bold text-white">
                Chatbot Interaktif
              </h1>
              <div className="max-auto">
                <p className="mt-8 text-gray-100">
                  Chatbot kami siap membantu Anda dengan pertanyaan hukum yang
                  Anda miliki. Mulai percakapan sekarang untuk mendapatkan
                  bantuan langsung.
                </p>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div>
            <div className="bg-customBeige relative w-full overflow-hidden rounded-lg p-4 text-white dark:text-gray-900">
              <div className="flex items-start gap-3">
                <span className="uil uil-info-circle h-5 w-5 flex-shrink-0"></span>
                <div className="w-0 flex-1">
                  <div className="mt-0 text-sm leading-5 opacity-90">
                    Data diambil dari sumber terpercaya
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="rounded-md bg-white p-4 shadow-md">
                <h3 className="text-left text-lg font-bold">Tanya Scoopie</h3>
                <div className="mt-2">
                  <div className="flex justify-between">
                    <span>Free Trial</span>
                    <span>{remainingChats}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tersisa</span>
                    <span>{remainingChats}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chat Terpakai</span>
                    <span>{usedChats}</span>
                  </div>
                  {remainingChats === 0 ? (
                    <a
                      href="/login"
                      className="mt-4 block rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                    >
                      Login
                    </a>
                  ) : (
                    <button
                      className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                      onClick={handleNewChat}
                    >
                      New Chat
                    </button>
                  )}
                </div>
                <h3 className="mt-4 text-left text-lg font-bold">Riwayat Chat</h3>
                <ul className="mt-2">
                  {sessions.map((session, index) => (
                    <li
                      key={session.id}
                      className={`cursor-pointer p-2 hover:bg-gray-200 ${
                        selectedSessionIndex === index ? 'bg-gray-300' : ''
                      }`}
                      onClick={() => handleSelectSession(index)}
                    >
                      Chat {index + 1} - {new Date(session.id).toLocaleDateString()}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Chatbot Section */}
            <div className="space-y-4 rounded-md bg-white p-4 shadow-md md:col-span-3">
              <div className="h-[500px] overflow-y-auto rounded-md bg-gray-100 p-4">
                {chatHistory.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.sender === "bot" && (
                      <div className="flex items-end">
                        <img
                          src={botProfile.profilePicUrl}
                          alt={botProfile.name}
                          className="mr-2 h-8 w-8 rounded-full"
                        />
                        <div className="rounded-lg bg-gray-300 px-4 py-2">
                          <p className="text-gray-900">{message.text}</p>
                        </div>
                      </div>
                    )}
                    {message.sender === "user" && (
                      <div className="rounded-lg bg-blue-500 px-4 py-2 text-white">
                        <p>{message.text}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 rounded-md border p-2"
                  placeholder="Ketik pertanyaan Anda..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                  className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                  onClick={handleSend}
                >
                  Send
                </button>
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Chatbot;
