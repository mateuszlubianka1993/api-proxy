const BASE_URL = "https://newsapi.org/v2";

export const fetchTopHeadlines = async ({ country, category, pageSize }) => {
  const params = new URLSearchParams({
    country,
    pageSize,
    apiKey: process.env.NEWS_API_KEY,
  });

  if (category) params.append("category", category);

  const response = await fetch(`${BASE_URL}/top-headlines?${params}`);
  return response.json();
};

export const fetchEverything = async ({ q, pageSize }) => {
  const params = new URLSearchParams({
    q,
    pageSize,
    apiKey: process.env.NEWS_API_KEY,
  });

  const response = await fetch(`${BASE_URL}/everything?${params}`);
  return response.json();
};
