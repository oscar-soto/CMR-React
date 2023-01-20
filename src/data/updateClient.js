/**
 * 
 * @param {number} id 
 * @param {{}} data 
 */
export const updateClient = async (id, data) => {
  const url = import.meta.env.VITE_API_URL;

  try {
    const resp = await fetch(`${url}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await resp.json();
  } catch (error) {
    console.log(error);
  }
}
