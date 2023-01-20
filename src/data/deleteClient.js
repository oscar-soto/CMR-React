export const deleteClient = async (id) => {
  const url = import.meta.env.VITE_API_URL;

  try {
    const resp = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    await resp.json();
  } catch (error) {
    console.log(error);
  }
};
