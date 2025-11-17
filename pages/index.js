import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Call your AI route (we’ll wire this next)
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, userMessage] }),
    });

    const data = await res.json();
    const botMessage = { role: "assistant", content: data.reply };
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🧙‍♂️ Mr. Wizard</h1>
      <p style={styles.sub}>Your SeniorLimo AI Assistant</p>

      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              backgroundColor:
                msg.role === "user" ? "#2926EF" : "#C28B00",
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              color: msg.role === "assistant" ? "#000" : "#fff",
            }}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div style={styles.inputRow}>
        <input
          style={styles.input}
          value={input}
          placeholder="Ask Mr. Wizard…"
          onChange={(e) => setInput(e.target.value)}
        />
        <button style={styles.button} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: 20,
    maxWidth: 600,
    margin: "0 auto",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 0,
    color: "#2926EF",
  },
  sub: {
    textAlign: "center",
    marginTop: 0,
    marginBottom: 20,
    color: "#C28B00",
    fontWeight: "bold",
  },
  chatBox: {
    border: "1px solid #ccc",
    padding: 15,
    borderRadius: 10,
    height: 400,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    background: "#f9f9f9",
  },
  message: {
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
  },
  inputRow: {
    display: "flex",
    marginTop: 10,
    gap: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    borderRadius: 8,
    background: "#2926EF",
    color: "#fff",
    border: "none",
  },
};
