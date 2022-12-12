import { useState, useEffect, createContext } from "react";
import axios from "axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [ categoriaActual, setCategoriaActual ] = useState({});
  const [producto, setProdcuto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido ] = useState([]);



  const obtenerCategorias = async () => {
    const { data } = await axios('/api/categorias');
    setCategorias(data); // funcion para poner en el useEffect en vez de escribirlo ahi.
  };
  const handleClickCategoria = id => {
    const categoria = categorias.filter(categoria => categoria.id === id);
    setCategoriaActual(categoria[0]);
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
  const handleAgregarPedido = ({categoriaId, imagen, ...producto}) => {
    if(pedido.some(productoState => productoState.id === producto.id)) {
      const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState);
      setPedido(pedidoActualizado);
  } else {
    setPedido([...pedido, producto]);
  }
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
  }}>{children}</QuioscoContext.Provider>;
};
export {
  QuioscoProvider
}
export default QuioscoContext
