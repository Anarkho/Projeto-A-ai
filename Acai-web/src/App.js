import './App.scss';
import MenuCliente from './pages/Cliente';
import MenuPedido from './pages/Pedido';


function App() {
  return (
    <div className="App">
      <MenuCliente/>
      <MenuPedido/>
    </div>
  );
}

export default App;
