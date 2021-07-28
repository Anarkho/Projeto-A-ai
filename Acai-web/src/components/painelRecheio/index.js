import React from 'react'
import { BtnRecheio, Container } from './styles'
import './recheio.scss'


const PainelRecheio = () => {
    return (
        <Container style={{display: ''}} className='container'>
            <BtnRecheio className='morango'
            onClick={()=>{}}>
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