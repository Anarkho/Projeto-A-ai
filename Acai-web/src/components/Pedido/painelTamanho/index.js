import React, { useContext } from 'react'
import { displayContext, subtituloContext } from '../../../App'
import { BtnTamanho, Container } from './styles'
import './tamanho.scss'


const PainelTamanho = () => {

    const { display, setdisplay } = useContext(displayContext)
    const {setsubtitulo} = useContext(subtituloContext)


    return (
        <Container style={{ display: display.displayT }} className='container'>
            <BtnTamanho className='pequeno'
            onClick={()=>{
                setdisplay({
                    type: 'ESCONDER_DISPLAY_TAMANHO',
                    payload: 'none'
                })
                setdisplay({
                    type: 'MOSTRAR_DISPLAY_COBERTURA',
                    payload: 'flex'
                })
                setsubtitulo({
                    type: 'ALTERAR_SUBTITULO_RECHEIO',
                    payload: 'Qual a cobertura do seu açai?'
                })
            }}>
                PEQUENO &#40;3O0 ml&#41;
            </BtnTamanho>
            <BtnTamanho className='medio'
            onClick={()=>{
                setdisplay({
                    type: 'ESCONDER_DISPLAY_TAMANHO',
                    payload: 'none'
                })
                setdisplay({
                    type: 'MOSTRAR_DISPLAY_COBERTURA',
                    payload: 'flex'
                })
                setsubtitulo({
                    type: 'ALTERAR_SUBTITULO_RECHEIO',
                    payload: 'Qual a cobertura do seu açai?'
                })
            }}>
                MEDIO &#40;500 ml&#41;
            </BtnTamanho>
            <BtnTamanho classname='grande'
            onClick={()=>{
                setdisplay({
                    type: 'ESCONDER_DISPLAY_TAMANHO',
                    payload: 'none'
                })
                setdisplay({
                    type: 'MOSTRAR_DISPLAY_COBERTURA',
                    payload: 'flex'
                })
                setsubtitulo({
                    type: 'ALTERAR_SUBTITULO_RECHEIO',
                    payload: 'Qual a cobertura do seu açai?'
                })
            }}>
                GRANDE &#40;700 ml&#41;
            </BtnTamanho>

        </Container>
    )
}

export default PainelTamanho