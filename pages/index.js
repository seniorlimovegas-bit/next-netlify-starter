"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  async function sendMessage() {
    const text = input.trim();
    if (!text) return;

    // show user message immediately
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");

    try {
      // call API
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      // show bot reply
      setMessages((m) => [
        ...m,
        { role: "assistant", text: data.reply || "No reply" },
      ]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: "API error" },
      ]);
    }
  }

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Mr. Wizard Chat</h1>

      <div
        style={{
          border: "1px solid #ccc",
          padding: 12,
          minHeight: 200,
          marginBottom: 12,
        }}
      >
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <strong>{m.role === "user" ? "You" : "Mr. Wizard"}:</strong>{" "}
            {m.text}
          </div>
        ))}
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: 10 }}
        placeholder="Type your message..."
      />

      <button
        onClick={sendMessage}
        style={{ marginTop: 10, padding: "10px 16px" }}
      >
        Send
      </button>
    </div>
  );
}
