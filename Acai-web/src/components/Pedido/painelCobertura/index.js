import React, { useContext } from 'react'
import { displayContext } from '../../../App'
import { BtnCobertura, Container } from './styles'
import './cobertura.scss'


const PainelCobertura = () => {
    const { display, setdisplay } = useContext(displayContext)
    return (
        <Container style={{ display: display.displayC }} className='container'>
            <BtnCobertura className='granola'
                onClick={() => {
                    setdisplay({
                        type: 'ESCONDER_DISPLAY_PEDIDO',
                        payload: 'none'
                    })
                    setdisplay({
                        type: 'ESCONDER_DISPLAY_COBERTURA',
                        payload: 'none'
                    })
                    setdisplay({
                        type: 'MOSTRAR_DISPLAY_MODAL',
                        payload: 'flex'
                    })
                }}>
                GRANOLA
            </BtnCobertura>
            <BtnCobertura className='pacoca'
                onClick={() => {
                    setdisplay({
                        type: 'ESCONDER_DISPLAY_PEDIDO',
                        payload: 'none'
                    })
                    setdisplay({
                        type: 'ESCONDER_DISPLAY_COBERTURA',
                        payload: 'none'
                    })
                    setdisplay({
                        type: 'MOSTRAR_DISPLAY_MODAL',
                        payload: 'flex'
                    })
                }}>
                PAÇOCA
            </BtnCobertura>
            <BtnCobertura classname='leiteNinho'
                onClick={() => {
                    setdisplay({
                        type: 'ESCONDER_DISPLAY_PEDIDO',
                        payload: 'none'
                    })
                    setdisplay({
                        type: 'ESCONDER_DISPLAY_COBERTURA',
                        payload: 'none'
                    })
                    setdisplay({
                        type: 'MOSTRAR_DISPLAY_MODAL',
                        payload: 'flex'
                    })
                }}>
                LEITE NINHO
            </BtnCobertura>

        </Container>
    )
}

export default PainelCobertura