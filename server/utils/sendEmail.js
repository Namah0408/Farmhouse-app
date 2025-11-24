export const sendEmail = async ({ to, subject, text, html }) => {
  // Placeholder function — implement with nodemailer or a transactional provider
  console.log("sendEmail called:", { to, subject });
  // Example: use nodemailer to send real emails
  return Promise.resolve(true);
};