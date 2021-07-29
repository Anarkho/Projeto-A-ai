import React from 'react'
import { BtnAlterar, Container } from './styles'
import $ from 'jquery'

const BotaoAlterar = () => {
    return (
        <Container>
            <BtnAlterar
                onClick={() => $('select').prop('disabled', false)}>
                ALTERAR
            </BtnAlterar>
        </Container>
    )
}

export default BotaoAlterar