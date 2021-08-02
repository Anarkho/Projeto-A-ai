import { createContext, useReducer } from 'react'
import './App.scss';
import ModalFinalizado from './components/Pedido/painelDetalhes/modalFinalzado';
import MenuCliente from './pages/Cliente';
import MenuPedido from './pages/Pedido';

import { displayReducer } from './store/display/displayReducer'

export const displayContext = createContext()

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

  return (
    <div className="App">
      <displayContext.Provider value={{ display, setdisplay }}>

        <MenuCliente />
        <MenuPedido />
        <ModalFinalizado />

      </displayContext.Provider>
    </div>
  );
}

export default App;
