import { useContext, createContext, useReducer } from 'react'
import { displayContext } from '../../App'
import { pedidoReducer } from '../../store/pedido'

import { Container } from './styles.js'
import BotaoAvancar from '../../components/Pedido/botoesDeDirecao/avançar'
import BotaoRetornar from '../../components/Pedido/botoesDeDirecao/retornar'
import PainelCobertura from '../../components/Pedido/painelCobertura'
import PainelRecheio from '../../components/Pedido/painelRecheio'
import PainelTamanho from '../../components/Pedido/painelTamanho'
import Cabecalho from '../../components/Pedido/cabecalho'
import DetalhesPedido from '../../components/Pedido/painelDetalhes'
import BotaoAlterar from '../../components/Pedido/botoesStatusPedido/alterar'
import BotaoFinalizar from '../../components/Pedido/botoesStatusPedido/finalizar'

export const pedidoContext = createContext()
const MenuPedido = () => {

    ///////////////////////////////////////////////////////////////////////////
    const initPedido = {
        recheio: '',
        tamanho: { pequeno: ['PEQUENO (300ml)', 3.30], medio: ['MEDIO (500ml)', 4.70], grande: ['GRANDE (700ml)', 5.80] },
        cobertura: { granola: ['MORANGO', 1.00], pacoca: ['BANANA', 1.00], leiteNinho: ['KIWI', 1.00] }
    }
    const [pedido, setpedido] = useReducer(pedidoReducer, initPedido)
    ///////////////////////////////////////////////////////////////////////////

    const { display } = useContext(displayContext)

    return (
        <Container style={{ display: display.displayPedido }}>
            <Cabecalho />
            <pedidoContext.Provider value={{ pedido, setpedido }}>
                <PainelRecheio />
                <PainelTamanho />
                <PainelCobertura />
                <BotaoAvancar />
                <BotaoRetornar />
                <DetalhesPedido />
                <BotaoAlterar />
                <BotaoFinalizar />
            </pedidoContext.Provider>
        </Container>
    )
}

export default MenuPedido