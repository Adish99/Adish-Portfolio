import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Server-side validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }
    if (name.length > 100 || email.length > 150 || subject.length > 200 || message.length > 3000) {
  return res.status(400).json({
    success: false,
    message: "One or more fields exceed the allowed length.",
  });
}

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["karkiadish999@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Portfolio Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <h3>Message</h3>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to send message.",
      });
    }

    console.log("Email sent:", data);

    res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Server error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};