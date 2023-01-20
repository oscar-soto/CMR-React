/**
 * Send data to DB
 * @param {data} dataClient
 */
export const addClients = async (data) => {
  const url = import.meta.env.VITE_API_URL;

  try {
    const resp = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await resp.json();
  } catch (error) {
    console.log(error);
  }
};
