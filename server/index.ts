import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Resend client (test mode)
const resend = new Resend(process.env.RESEND_API_KEY as string);

// Type for contact request body
interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

// POST /contact route
app.post("/contact", async (req: Request<unknown, unknown, ContactRequestBody>, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill in all fields." });
  }

  try {
    // ✅ Test mode sender from Resend (no domain needed)
    await resend.emails.send({
      from: "Hello <hello@resend.test>", // Resend test sender
      to: "Fenetdamena74@gmail.com",    // Your Gmail
      subject: `📬 New message from ${name}`,
      replyTo: email,                    // Replies go to the visitor
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, message: "✅ Message sent successfully!" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Email send failed:", error.message);
      return res.status(500).json({ error: `Failed to send message: ${error.message}` });
    }
    console.error("Unknown error:", error);
    return res.status(500).json({ error: "An unknown error occurred." });
  }
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
