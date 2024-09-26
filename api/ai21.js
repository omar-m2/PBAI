export default async function handler(req, res) {
    const AI21_API_KEY = process.env.AI21_API_KEY;  // Access the key securely from Vercel environment
  
    const { idea } = req.body;  // Extract project idea from the request
  
    if (!idea) {
      return res.status(400).json({ message: 'Project idea is required' });
    }
  
    try {
      // Send request to AI21 API
      const response = await fetch('https://api.ai21.com/studio/v1/j2-ultra/complete', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AI21_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: idea,
          numResults: 1,
          maxTokens: 800,
          temperature: 0.7,
        }),
      });
  
      // Check if the API request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Get the response from AI21 API
      const data = await response.json();
      res.status(200).json(data);  // Send the response back to the frontend
    } catch (error) {
      console.error('Error fetching AI21 API:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  