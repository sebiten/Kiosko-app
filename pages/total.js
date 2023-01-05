import Layout from '../layout/layout'
import { useEffect, useCallback } from 'react'
import useQuiosco from '../hooks/useQuiosco'
import { formatearDinero } from '../helpers'

export default function Total() {

  const { pedido, nombre, setNombre, colocarPedido, total} = useQuiosco()

  
  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3;
}, [pedido, nombre])

  useEffect(() => {
    comprobarPedido()
  }, [pedido, comprobarPedido]);

  
  return (
    <Layout pagina="Total y confirmar pedido">
    <h1 className="text-3xl text-gray-800 font-light">Total y confirmar pedido</h1>
    <p className="text-xl my-10">Confirma tu pedido a continuacion</p>
      <form
        onSubmit={colocarPedido}
      >
        <div>
          <label 
          className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
            placeholder="Nombre Cliente"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className='mt-10'> 
          <p className='text-2xl'>Total a pagar {''} <span className='font-bold'>{formatearDinero(total)}</span>
          </p>
        </div>
        <div>
          <input
            className={`${comprobarPedido() ? "bg-indigo-100" : "bg-indigo-600 hover:bg-indigo-800"}bg-gray-800 w-1/6 mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900 cursor-pointer`}
            type="submit"
            value="Confirmar Pedido"
            disabled={comprobarPedido()}
          />
        </div>
      </form>

  
      </Layout>
  
  )
  
}
  


