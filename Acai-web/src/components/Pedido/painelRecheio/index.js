import React, { useContext } from 'react'
import { displayContext } from '../../../App'
import { BtnRecheio, Container } from './styles'
import './recheio.scss'


const PainelRecheio = () => {

    const { display, setdisplay } = useContext(displayContext)

    return (
        <Container style={{ display: display.displayR }} className='container'>
            <BtnRecheio className='morango'
                onClick={() => {
                    setdisplay({
                        type: 'ESCONDER_DISPLAY_RECHEIO',
                        payload: 'none',
                    })
                    setdisplay({
                        type: 'MOSTRAR_DISPLAY_TAMANHO',
                        payload: 'flex'
                    })
                   
                }}>
                MORANGO
            </BtnRecheio>
            <BtnRecheio className='banana'
                onClick={() => {
                    setdisplay({
                        type: 'ESCONDER_DISPLAY_RECHEIO',
                        payload: 'none',
                    })
                    setdisplay({
                        type: 'MOSTRAR_DISPLAY_TAMANHO',
                        payload: 'flex'
                    })
                }}>
                BANANA
            </BtnRecheio>
            <BtnRecheio classname='kiwi'
                onClick={() => {
                    setdisplay({
                        type: 'ESCONDER_DISPLAY_RECHEIO',
                        payload: 'none',
                    })
                    setdisplay({
                        type: 'MOSTRAR_DISPLAY_TAMANHO',
                        payload: 'flex'
                    })
                }}>
                KIWI
            </BtnRecheio>

        </Container>
    )
}

export default PainelRecheio