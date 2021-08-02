import React, { useContext } from 'react'
import { subtituloContext } from '../../../App'
import { Container, Titulo, Escolha } from './styles'

const Cabecalho = () => {

    const{subtitulo} = useContext(subtituloContext)

    return(
        <Container>
            <Titulo>Faça seu pedido!</Titulo>
            <Escolha>{subtitulo.titulo}</Escolha> 
        </Container>
    )
}

export default Cabecalho