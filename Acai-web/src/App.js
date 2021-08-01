import { createContext, useReducer } from 'react'
import './App.scss';
import ModalFinalizado from './components/Pedido/painelDetalhes/modalFinalzado';
import MenuCliente from './pages/Cliente';
import MenuPedido from './pages/Pedido';

import {displayReducer} from './store/displayReducer'

export const displayContext = createContext()

function App() {

  const initialValueDisplay = 'none'
  const [display, setdisplay] = useReducer(displayReducer, initialValueDisplay)

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
