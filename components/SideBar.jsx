import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";

function SideBar() {
  const { categorias } = useQuiosco();

  return (
    <>
    <div className="flex items-center justify-center sticky ">

      <Image
        width={220}
        height={110}
        alt="logtipo"
        src="/assets/img/logo.svg"
      />
    </div>
      <nav className="mt-10">
      	  {categorias.map((categoria) => (
            <Categoria key={categoria.id} categoria={categoria}/>

          ))}
      </nav>
    </>
  );
}

export default SideBar;
