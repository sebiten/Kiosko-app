import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";


const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [ categoriaActual, setCategoriaActual ] = useState({});
  const [producto, setProdcuto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido ] = useState([]);
  const router = useRouter();

  const obtenerCategorias = async () => {
    const { data } = await axios('/api/categorias');
    setCategorias(data); // funcion para poner en el useEffect en vez de escribirlo ahi.
  };
  const handleClickCategoria = id => {
    const categoria = categorias.filter(categoria => categoria.id === id);
    setCategoriaActual(categoria[0]);
    router.push('/');
  }

  useEffect(() => {
    obtenerCategorias(); // se hace el fetch desde obetenercategorias
  }, []);

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias])

  const handleSetProducto = producto => {
    setProdcuto(producto);
  }

  const handleChangeModal = () => {

    setModal(!modal);
  }
  const handleAgregarPedido = ({categoriaId, ...producto}) => {
    if(pedido.some(productoState => productoState.id === producto.id)) {
      const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState);
      setPedido(pedidoActualizado);
      toast.success('Producto actualizado');
  } else {
    setPedido([...pedido, producto]);
    toast.success('Producto agregado al pedido');
  }

    setModal(false);
  }
  const handleEditarCantidades = id => {
      const productoActualizar = pedido.filter(producto => producto.id === id);
      setProdcuto(productoActualizar[0]);
      setModal(!modal);

  }
  const handleEliminarProducto = id => {
    const pedidoActualizado = pedido.filter(producto => producto.id !== id);
    setPedido(pedidoActualizado);
    toast.error('Producto eliminado');

  }
 
  
  return <QuioscoContext.Provider value={{
    categorias,
    handleClickCategoria,
    categoriaActual,
    handleSetProducto,
    producto,
    modal,
    handleChangeModal,
    handleAgregarPedido,
    pedido,
    handleEditarCantidades,
    handleEliminarProducto
  }}>{children}</QuioscoContext.Provider>;
};

export {
  QuioscoProvider
}
export default QuioscoContext
