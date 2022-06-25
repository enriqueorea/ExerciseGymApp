export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  console.log(import.meta.env.VITE_API_KEY);
  const resp = await fetch(url, options);
  const data = await resp.json();
  return data;
};
