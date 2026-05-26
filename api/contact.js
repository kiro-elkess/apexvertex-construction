export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, projectType, message } = req.body;

  if (!name || name.trim().length < 2) {
    return res.status(400).json({ error: 'Name must be at least 2 characters long' });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (!message || message.trim().length < 5) {
    return res.status(400).json({ error: 'Message must be at least 5 characters long' });
  }

  const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!googleScriptUrl) {
    console.warn('GOOGLE_SCRIPT_URL is not set. Running in Demo mode.');
    return res.status(200).json({
      success: true,
      demo: true,
      message: 'Consultation simulation successful. (Please configure GOOGLE_SCRIPT_URL in Vercel to save rows to Google Sheets!)'
    });
  }

  try {
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'Consultation',
        name,
        email,
        projectType,
        message,
        timestamp: new Date().toISOString()
      }),
    });

    const data = await response.json();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending data to Google Apps Script:', error);
    return res.status(500).json({ error: 'Failed to submit consultation request. Please try again later.' });
  }
}
