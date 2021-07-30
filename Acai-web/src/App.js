import './App.scss';
import ModalFinalizado from './components/Pedido/painelDetalhes/modalFinalzado';
import MenuCliente from './pages/Cliente';
import MenuPedido from './pages/Pedido';

function App() {
  return (
    <div className="App">
      <MenuCliente/>
      <MenuPedido/>
      <ModalFinalizado/>
    </div>
  );
}

export default App;
