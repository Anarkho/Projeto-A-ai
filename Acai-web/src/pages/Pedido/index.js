import React from 'react'

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

const MenuPedido = () => {

    return (
        <Container style={{display: 'none'}}>
            <Cabecalho/>
            <PainelRecheio/>
            <PainelTamanho/>
            <PainelCobertura/>
            <BotaoAvancar/>
            <BotaoRetornar/>
            <DetalhesPedido/>
            <BotaoAlterar/>
            <BotaoFinalizar/>
            
        </Container>
    )
}

export default MenuPedido