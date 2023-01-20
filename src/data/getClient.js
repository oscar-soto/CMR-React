/**
 * Get a client by id
 * @param {number} id 
 */
export const getClient = async (id) => {
  const url = import.meta.env.VITE_API_URL;

  const resp = await fetch(`${url}/${id}`);
  const result = await resp.json();
  
  return result;
}
