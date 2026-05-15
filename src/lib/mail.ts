import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to your preferred service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async ({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}) => {
  const mailOptions = {
    from: `"Sagun Education" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
