import React, { useContext, useEffect } from 'react'
import PainelEntradaCliente from '../../components/Cliente/PainelEntradaCliente'
import { Container } from './styles'
import { displayContext } from '../../App'

const MenuCliente = () => {
    const { display, setdisplay } = useContext(displayContext) // extracão da propriedade do objeto

    useEffect(() => {
        setdisplay({
            type: 'MOSTRAR_DISPLAY_CLIENTE',
            payload: 'flex'
        })
    }, [])

    return (
        <Container style={{ display: display.displayCliente }}>
            <PainelEntradaCliente />
        </Container>
    )
}

export default MenuCliente