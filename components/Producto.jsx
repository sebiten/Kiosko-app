import Image from "next/image"
import { formatearDinero } from "../helpers/index";



const Producto = ({producto}) => {

  const { nombre, imagen, precio } = producto;
  return (
    <div className='border-2 p-3'>
      <Image src={`/assets/img/${imagen}.jpg`} alt={producto.nombre} width={400} height={300} />
      <div className="p-5">
          <h3 className="font-bold text-xl">{nombre}</h3>
          <p className="mt-5 font-black text-2xl text-amber-500">
            {formatearDinero(precio)}
          </p>
      </div>
    </div>
  )
}

export default Producto