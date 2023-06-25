const tmdb = async (url) => {

  const data = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_TMDB_API_KEY}`,
      accept: 'application/json'
    }
  });
  return data;
};

export default tmdb;
