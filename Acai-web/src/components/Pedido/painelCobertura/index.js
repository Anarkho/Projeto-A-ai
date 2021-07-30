import React from 'react'
import { BtnCobertura, Container } from './styles'
import './cobertura.scss'

const PainelCobertura = () => {
    return (
        <Container style={{display:''}} className='container'>
            <BtnCobertura className='granola'>
                GRANOLA
            </BtnCobertura>
            <BtnCobertura className='pacoca'>
                PAÇOCA
            </BtnCobertura>
            <BtnCobertura classname='leiteNinho'>
                LEITE NINHO
            </BtnCobertura>

        </Container>
    )
}

export default PainelCobertura