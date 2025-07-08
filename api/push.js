// api/push.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'No text provided' });
  }

  console.log('🟢 Получено SMS:', text);

  return res.status(200).json({ status: 'ok', received: text });
}
