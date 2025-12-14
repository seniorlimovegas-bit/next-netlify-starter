<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Mr. Wizard – SeniorLimo AI</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      background: #0f172a;
      color: #f8fafc;
      margin: 0;
      padding: 20px;
    }

    h1 {
      color: #facc15;
      margin-bottom: 10px;
    }

    textarea {
      width: 100%;
      height: 120px;
      font-size: 16px;
      padding: 10px;
      margin-top: 10px;
      box-sizing: border-box;
    }

    button {
      margin-top: 10px;
      padding: 12px 18px;
      font-size: 16px;
      background: #facc15;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    #chat {
      margin-top: 20px;
      padding: 15px;
      background: #020617;
      border-radius: 6px;
    }

    .user {
      color: #38bdf8;
      margin-bottom: 8px;
    }

    .wizard {
      color: #a7f3d0;
      margin-bottom: 12px;
    }
  </style>
</head>
<body>

  <h1>🚐 Mr. Wizard</h1>
  <p>SeniorLimo AI – local test interface</p>

  <textarea id="input" placeholder="Type your message here..."></textarea>
  <br />
  <button onclick="sendMessage()">Send</button>

  <div id="chat"></div>

  <script>
    function sendMessage() {
      const input = document.getElementById("input");
      const chat = document.getElementById("chat");
      const text = input.value.trim();

      if (!text) return;

      chat.innerHTML += `<div class="user"><strong>You:</strong> ${text}</div>`;

      setTimeout(() => {
        chat.innerHTML += `
          <div class="wizard">
            <strong>Mr. Wizard:</strong>
            I’m online. This confirms the interface is working correctly.
          </div>
        `;
        chat.scrollTop = chat.scrollHeight;
      }, 400);

      input.value = "";
    }
  </script>

</body>
</html>
