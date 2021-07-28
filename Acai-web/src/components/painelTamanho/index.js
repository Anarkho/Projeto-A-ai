import React from 'react'
import { BtnTamanho, Container } from './styles'
import './tamanho.scss'


const PainelTamanho = () => {
    return (
        <Container style={{display:'none'}} className='container'>
            <BtnTamanho className='pequeno'>
                PEQUENO &#40;3O0 ml&#41;
            </BtnTamanho>
            <BtnTamanho className='medio'>
                MEDIO &#40;500 ml&#41;
            </BtnTamanho>
            <BtnTamanho classname='grande'>
                GRANDE &#40;700 ml&#41;
            </BtnTamanho>

        </Container>
    )
}

export default PainelTamanho