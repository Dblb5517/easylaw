import React, { useState } from "react";
import "./chatBox.scss";

function ChatBox() {
  const [prompt, setPrompt] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  const testAi = async () => {
    if (!prompt.trim()) return; 

    setLoading(true);
    setError("");

    const newHistory = [...chatHistory, { role: "user", content: prompt }];
    setChatHistory(newHistory);
    setPrompt(""); 

    const url = process.env.REACT_APP_OPENAI_API_URL;
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_OPENAI_API_KEY,
        "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: prompt }],
        web_access: false,
      }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      setChatHistory([
        ...newHistory,
        { role: "assistant", content: data.result },
      ]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-wrapper">
      {!isOpen && (
        <button className="chat-icon" onClick={() => setIsOpen(true)}>
          💬
        </button>
      )}

      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Chat Assistant</span>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>
          <span className="warning">
            AI can make mistakes! Don't rely solely on AI opinions!
          </span>

          {chatHistory.length ? (
            <div className="chat-result">
              {chatHistory.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.role}`}>
                  <strong>{msg.role === "user" ? "You" : "AI"}:</strong>{" "}
                  {msg.content}
                </div>
              ))}
            </div>
          ) : (
            ""
          )}

          <textarea
            className="chat-input"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask me anything..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                testAi();
              }
            }}
          />
          <button className="chat-button" onClick={testAi} disabled={loading}>
            {loading ? "Generating..." : "Send"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
