import { createContext, useReducer } from 'react'
import './App.scss';
import ModalFinalizado from './components/Pedido/painelDetalhes/modalFinalzado';
import MenuCliente from './pages/Cliente';
import MenuPedido from './pages/Pedido';

import { displayReducer } from './store/display'
import { subtituloReducer } from './store/subtitulo';

export const displayContext = createContext()
export const subtituloContext = createContext()

function App() {

  const init = {
    displayCliente: 'none',
    displayPedido: 'none',
    displayR: 'none',
    displayT: 'none',
    displayC: 'none',
    displayM: 'none',
    displayBD: 'none',
    displayBS: 'none'
  }
  const [display, setdisplay] = useReducer(displayReducer, init)

  const inicio = {titulo: 'Qual o recheio você quer no seu açai?'}
  const [subtitulo, setsubtitulo] = useReducer(subtituloReducer, inicio)

  return (
    <div className="App">
      <displayContext.Provider value={{ display, setdisplay }}>

        <MenuCliente />
        <subtituloContext.Provider value={{ subtitulo, setsubtitulo }}>
        <MenuPedido />
        </subtituloContext.Provider>
        <ModalFinalizado />

      </displayContext.Provider>
    </div>
  );
}

export default App;
