import { useNavigate } from 'react-router-dom';
import { Form } from '../components/Form';

export const NewClient = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-blue-900 text-4xl">Nuevo Cliente</h1>
      <p className="mt-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-gray-50 px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        <form action="">
          <Form />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-gray-50 text-lg"
            value="Registrar Cliente"
          />
        </form>
      </div>
    </>
  );
};
