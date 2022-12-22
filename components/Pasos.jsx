import { useRouter } from 'next/router'
import useQuiosco from '../hooks/useQuiosco'
const pasos =[
  {paso: 1, nombre: 'Menu', url: "/"},
  {paso: 2, nombre: 'Resumen', url: "/resumen"},
  {paso: 3, nombre: "Datos y total", url: "/total"}
]

const Pasos = () => {
  const {handleChangePaso, paso} = useQuiosco()
  const router = useRouter()
  return (
    <>
    <div className="flex justify-between mb-5">
      {pasos.map((paso) => (
        <button
        onClick={() => {
          router.push(paso.url)
          handleChangePaso(paso.paso)
        }}
        className="text-2xl font-bold"
        key={paso.paso}>{paso.nombre}</button>
      ))}
    </div>
    </>
  )
}

export default Pasos