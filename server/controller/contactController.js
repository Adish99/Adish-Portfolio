export const sendContactMessage = (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log("Contact form data:", {
    name,
    email,
    subject,
    message,
  });

  res.status(200).json({
    success: true,
    message: "Message received successfully.",
  });
};