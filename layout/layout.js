import Head from "next/head"
import SideBar from "../components/SideBar"

export default function Layout({pagina, children}) {
  return (
    <>
    <Head >
     <title>Cafe - {pagina}</title>
     <meta name="description" content="Kiosko Cafeteria" />
    </Head>

    <div className="md:flex">
      <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <SideBar />
      </aside>
      <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
      {children}
      </main>
    </div>
    </>
  )
}

