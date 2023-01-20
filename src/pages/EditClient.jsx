export async function loader({params}) {
  console.log(params)
  return 1;
}

export const EditClient = () => {
  return (
    <div>EditClient</div>
  )
}
