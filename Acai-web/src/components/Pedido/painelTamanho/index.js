import React, { useContext } from 'react'
import { displayContext } from '../../../App'
import { BtnTamanho, Container } from './styles'
import './tamanho.scss'


const PainelTamanho = () => {

    const { display, setdisplay } = useContext(displayContext)


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
            }}>
                GRANDE &#40;700 ml&#41;
            </BtnTamanho>

        </Container>
    )
}

export default PainelTamanho