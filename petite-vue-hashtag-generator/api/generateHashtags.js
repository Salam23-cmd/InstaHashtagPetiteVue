export default async function handler(req, res) {
  const keyword = req.query.keyword;
  if (!keyword) return res.status(400).json({ error: 'Keyword is required' });

  const url = `https://hashtag-generator.p.rapidapi.com/v1/hashtags?keyword=${encodeURIComponent(keyword)}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'hashtag-generator.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'API fetch failed' });
  }
}
