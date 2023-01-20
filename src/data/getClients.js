export const getClients = async () => {
  const url = import.meta.env.VITE_API_URL;

  const resp = await fetch(url);
  const result = await resp.json();

  return result;
};
