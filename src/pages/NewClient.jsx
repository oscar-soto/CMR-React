import { Form, useNavigate, useActionData } from 'react-router-dom';
import { Error } from '../components/Error';
import { FormClient } from '../components/FormClient';

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const email = formData.get('email');
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  ); 

  // Validation
  const errors = [];
  if (Object.values(data).includes('')) {
    errors.push('Todos los campos son obligatorios');
  }
  if(!regex.test(email)) {
    errors.push('El email no es valido')
  }

  // Return errors
  if (Object.keys(errors).length) {
    return errors;
  }
}

export const NewClient = () => {
  const errors = useActionData();
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
        {errors?.length && errors.map((err, i) => <Error key={i}>{err}</Error>)}

        <Form method="POST">
          <FormClient />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-gray-50 text-lg"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
};
