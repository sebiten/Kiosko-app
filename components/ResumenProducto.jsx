import Image from "next/image"
import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"




function ResumenProducto({producto}) {

  const { handleEditarCantidades, handleEliminarProducto} = useQuiosco();

  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
      <Image src={`/assets/img/${producto.imagen}.jpg`} alt={producto.nombre} width={300} height={400} />
      </div>
      <div className="md:w-4/6">
        <p className="text-3xl font-bold text-amber-600">{producto.nombre}</p>
        <p className="text-xl font-bold mt-2">Cantidad: {producto.cantidad}</p>
        <p className="text-xl font-bold mt-2">Precio: {formatearDinero(producto.precio)}</p>
        <p className="text-xl font-bold mt-2">Subtotal: {formatearDinero(producto.precio * producto.cantidad)}</p>
      </div>
      <div>
        <button
          type="button"
          className="bg-sky-500 hover:bg-sky-700 w-full mt-5 p-2 text-white font-bold rounded"
          onClick={() => handleEditarCantidades(producto.id)}
        >Editar</button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 w-full mt-5 p-2 text-white font-bold rounded"
          onClick={() => handleEliminarProducto(producto.id)}
        >Eliminar</button>
      </div>
    </div>
  )
}

export default ResumenProducto