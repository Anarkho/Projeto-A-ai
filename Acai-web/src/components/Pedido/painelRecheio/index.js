import React, { useContext } from 'react'
import { displayContext } from '../../../App'
import { BtnRecheio, Container } from './styles'
import './recheio.scss'
import { subtituloContext } from '../../../App'


const PainelRecheio = () => {

    const { display, setdisplay } = useContext(displayContext)
    const {setsubtitulo} = useContext(subtituloContext)

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
                    setsubtitulo({
                        type: 'ALTERAR_SUBTITULO_RECHEIO',
                        payload: 'Qual o tamanho do seu açai?'
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
                    setsubtitulo({
                        type: 'ALTERAR_SUBTITULO_RECHEIO',
                        payload: 'Qual o tamanho do seu açai?'
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
                    setsubtitulo({
                        type: 'ALTERAR_SUBTITULO_RECHEIO',
                        payload: 'Qual o tamanho do seu açai?'
                    })
                }}>
                KIWI
            </BtnRecheio>

        </Container>
    )
}

export default PainelRecheio