import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/layout";
import useQuiosco from "../hooks/useQuiosco";
import Producto from "../components/Producto";

export default function Home() {
  const { categoriaActual } = useQuiosco();
  
  return (
    <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black ">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-4">Elige y personaliza tu pedido a continuacion</p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">

      {categoriaActual?.productos?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
      ))}
      </div>
    </Layout>
  );
}
