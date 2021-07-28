import './App.scss';
import MenuPedido from './pages/Pedido';
import Cabecalho from './components/cabecalho'

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <MenuPedido/>
    </div>
  );
}

export default App;
