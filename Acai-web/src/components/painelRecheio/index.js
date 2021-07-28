import React from 'react'
import { BtnRecheio, Container } from './styles'
import './comportamento.scss'


const PainelRecheio = () => {
    return (
        <Container className='container'>
            <BtnRecheio className='morango'>
                MORANGO
            </BtnRecheio>
            <BtnRecheio className='banana'>
                BANANA
            </BtnRecheio>
            <BtnRecheio classname='kiwi'>
                KIWI
            </BtnRecheio>

        </Container>
    )
}

export default PainelRecheio