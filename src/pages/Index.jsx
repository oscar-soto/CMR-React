import { useLoaderData } from 'react-router-dom';
import { Client } from '../components/Client';
import { getClients } from '../data/getClients';

export function loader() {
  const clients = getClients();
  return clients || {};
}

export const Index = () => {
  const clients = useLoaderData();
  
  return (
    <>
      <h1 className="font-black text-blue-900 text-4xl">Clientes</h1>
      <p className="mt-3">Administra tus Clientes</p>

      {clients.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-gray-50">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clients.map((client) => (
              <Client client={client} key={client.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay clientes aun</p>
      )}
    </>
  );
};
