import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message
      const message = await storage.createContactMessage(validatedData);
      
      // Send email notification (in production, you'd configure this with real SMTP)
      try {
        const transporter = nodemailer.createTransporter({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER || process.env.EMAIL_USER,
            pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.SMTP_FROM || "noreply@portfolio.com",
          to: "ezhumalaisanjay05@gmail.com",
          subject: `Portfolio Contact: ${validatedData.subject}`,
          html: `
            <h3>New contact form submission</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          `,
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the request if email fails
      }
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  // Download CV endpoint
  app.get("/api/download-cv", (req, res) => {
    // In production, this would serve the actual CV file
    res.redirect("https://drive.google.com/file/d/your-cv-file-id/view");
  });

  const httpServer = createServer(app);
  return httpServer;
}
