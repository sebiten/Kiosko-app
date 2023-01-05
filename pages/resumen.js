import Layout from "../layout/layout"
import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "../components/ResumenProducto";


export default function Resumen() {

  const { pedido } = useQuiosco();
  return (
    <Layout pagina="Resumen">
      <h1 className="text-3xl text-gray-800 font-light">Resumen</h1>
      <p className="text-xl my-10">Revisa tu pedido</p>
      {pedido.lenght === 0 ? (
        <p className="text-xl my-10">No hay productos</p>
      ) : (
       pedido.map(producto => (
        <ResumenProducto
          key={producto.id}
          producto={producto}
        />
       ))


      )}
    </Layout>
  )
}