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

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY as string);

// Define expected request body structure
interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

// Contact form route
app.post(
  "/contact",
  async (
    req: Request<Record<string, never>, Record<string, never>, ContactRequestBody>,
    res: Response
  ) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Please fill in all fields." });
    }

    try {
      await resend.emails.send({
        from: "Fenet Damena <Fenetdamena74@gmail.com>", // ✅ Verified sender
        to: "Fenetdamena74@gmail.com",                  // ✅ Your inbox
        subject: `📬 New message from ${name}`,
        replyTo: email,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      return res.status(200).json({
        success: true,
        message: "✅ Message sent successfully!",
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("❌ Email send failed:", error.message);
        return res.status(500).json({
          error: `Failed to send message: ${error.message}`,
        });
      }

      console.error("❌ Unknown error:", error);
      return res.status(500).json({
        error: "An unknown error occurred while sending the email.",
      });
    }
  }
);

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
