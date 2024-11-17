import emailjs from 'emailjs-com';

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  const serviceID = process.env.EMAILJS_SERVICE_ID;
  const templateID = process.env.EMAILJS_TEMPLATE_ID;
  const userID = process.env.EMAILJS_USER_ID;

  const templateParams = {
    name,
    email,
    subject,
    message,
  };

  try {
    const emailResponse = await emailjs.send(serviceID, templateID, templateParams, userID);
    return new Response(JSON.stringify({ message: 'Email sent successfully', emailResponse }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email', details: error }), {
      status: 500,
    });
  }
}
