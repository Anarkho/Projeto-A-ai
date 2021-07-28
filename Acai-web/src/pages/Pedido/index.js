import React from 'react'
import BotaoAvancar from '../../components/botoesDeDirecao/avançar/index.js'
import { BtnAvanca } from '../../components/botoesDeDirecao/avançar/styles.js'
import BotaoRetornar from '../../components/botoesDeDirecao/retornar/index.js'
import PainelCobertura from '../../components/painelCobertura/index.js'
import PainelRecheio from '../../components/painelRecheio/index.js'
import PainelTamanho from '../../components/painelTamanho/index.js'
import {Container} from './styles.js'

const MenuPedido = () => {

    return(
        <Container>
           <PainelRecheio/>
           <PainelTamanho/>
           <PainelCobertura/>
           <BotaoAvancar/>
           <BotaoRetornar/>
        </Container>
    )
}

export default MenuPedido