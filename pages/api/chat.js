export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
  } else {
    try {
      const { message } = req.body || {};

      res.status(200).json({
        reply: `Mr. Wizard received: ${message || "no message sent"}`
      });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }
}
