import React from 'react'
import {
    Container,
    TextCliente,
    TextNumero,
    TextCobertura,
    TextRecheio,
    TextPreco,
    TextTamanho,
    ImgCheck
} from './styles'

const ModalFinalizado = () => {
    return (
        <Container style={{display: ''}}>
            <span>
                <h1>Pedido Finalizado</h1>
                 <ImgCheck src='https://i.ibb.co/N6QVFtx/check.png' alt='check'/> 
            </span>
            <TextCliente><b>Nome do cliente:</b> Alex Soares Fernandes</TextCliente>
            <TextNumero><b>Telefone:</b> 43 9 8453-2406</TextNumero>

            <TextRecheio><b>Recheio escolhido:</b> MORANGO </TextRecheio>
            <TextTamanho><b>Tamanho escolhido:</b> MEDIO 500ml </TextTamanho>
            <TextCobertura><b>Cobertura escolhida:</b> LEITE NINHO</TextCobertura>

            <TextPreco>Total a pagar: R$ 4,55 </TextPreco>

        </Container>
            )
}

export default ModalFinalizado