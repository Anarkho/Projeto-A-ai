import React from 'react'
import PainelEntradaCliente from '../../components/Cliente/PainelEntradaCliente'
import { Container } from './styles'

const MenuCliente = () => {
    return(
        <Container style={{display: 'none'}}>
            <PainelEntradaCliente/>
        </Container>
    )
}

export default MenuCliente