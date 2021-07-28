import React from 'react'
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
        </Container>
    )
}

export default MenuPedido