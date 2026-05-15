'use server';

import { sendEmail } from '@/lib/mail';

export async function submitInquiry(formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const whatsapp = formData.get('whatsapp') as string;
  const destination = formData.get('destination') as string;
  const message = formData.get('message') as string;

  if (!name || !phone || !destination) {
    return { success: false, error: 'Missing required fields' };
  }

  const subject = `New Inquiry from ${name} - Sagun Education`;
  const text = `
    New Inquiry Details:
    Name: ${name}
    Phone: ${phone}
    WhatsApp: ${whatsapp}
    Preferred Destination: ${destination}
    Message: ${message}
  `;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
      <h2 style="color: #003366; border-bottom: 2px solid #C8102E; padding-bottom: 10px;">New Inquiry Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp}</p>
      <p><strong>Preferred Destination:</strong> ${destination}</p>
      <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #003366;">
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided.'}</p>
      </div>
      <p style="margin-top: 20px; font-size: 0.9em; color: #666;">This is an automated notification from Sagun Education website.</p>
    </div>
  `;

  const result = await sendEmail({
    to: process.env.ADMIN_EMAIL || 'sumansapkota771@gmail.com', // Default to a known email if not set
    subject,
    text,
    html,
  });

  if (result.success) {
    return { success: true };
  } else {
    return { success: false, error: 'Failed to send email. Please try again later.' };
  }
}
