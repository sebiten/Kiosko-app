import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";
import { useState, useEffect } from "react";

const ModalProducto = () => {
  const { producto, handleChangeModal, handleAgregarPedido, pedido } = useQuiosco();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
   if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
    const productoEdicion = pedido.find((pedidoState) => pedidoState.id === producto.id);
    setEdicion(true);
    setCantidad();
   }
  }, [producto, pedido]);

  

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={400}
          height={300}
          alt={`Imagen de ${producto.nombre}`}
          src={`/assets/img/${producto.imagen}.jpg`}
        />
      </div>

      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">{producto.nombre}</h2>
        <p className="text-amber-500 mt-5 font-black text-5xl">
          {formatearDinero(producto.precio)}
        </p>
        <div className="flex gap-4 mt-5 ">
          <button
            type="button"
            onClick={() => {
              if (cantidad > 1) {
                setCantidad(cantidad - 1);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <p className="text-3xl">{cantidad}</p>
          <button
             type="button"
             onClick={() => setCantidad(cantidad + 1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="bg-amber-500 hover:bg-amber-700 text-white font-bold text-xl p-3 mt-5 w-full"
          onClick={() => handleAgregarPedido({...producto, cantidad})}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
