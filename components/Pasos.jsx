import { useRouter } from 'next/router'
const pasos =[
  {paso: 1, nombre: 'Menu', url: "/"},
  {paso: 2, nombre: 'Resumen', url: "/resumen"},
  {paso: 3, nombre: "Datos y total", url: "/total"}
]

const Pasos = () => {
  const router = useRouter();
  const calcularPorcentaje = () => {
    let porcentaje
    if (router.pathname === "/") {
      porcentaje = '13%'
    } else if (router.pathname === "/resumen") {
      porcentaje = '55%'
    } else if (router.pathname === "/total") {
      porcentaje = '100%'
    }
    return porcentaje
  }
  return (
    <>
    <div className="flex justify-between mb-5">
      {pasos.map((paso) => (
        <button
        onClick={() => {
          router.push(paso.url)
        }}
        className="text-2xl font-bold"
        key={paso.paso}>{paso.nombre}</button>
      ))}
    </div>
    <div className='bg-gray-100 mb-10'>
      <div className='rounded-full bg-amber-500 text-xs leading-none h-2 text-center w-10' style={{width: calcularPorcentaje()}}>
        
      </div>
    </div>
    </>
  )
}

export default Pasos