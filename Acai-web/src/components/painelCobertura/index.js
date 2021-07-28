import React from 'react'
import { BtnTamanho, Container } from './styles'
import './cobertura.scss'


const PainelCobertura = () => {
    return (
        <Container style={{display:'none'}} className='container'>
            <BtnTamanho className='granola'>
                GRANOLA
            </BtnTamanho>
            <BtnTamanho className='pacoca'>
                PAÇOCA
            </BtnTamanho>
            <BtnTamanho classname='leiteNinho'>
                LEITE NINHO
            </BtnTamanho>

        </Container>
    )
}

export default PainelCobertura