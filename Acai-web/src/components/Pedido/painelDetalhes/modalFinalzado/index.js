import React, { useEffect } from 'react'
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


let resposta = []
const ModalFinalizado = (props) => {
    useEffect(() => {
       
        
    })
    

    return (
        <Container style={{ display: 'none' }} className='container'>
            <span>
                <h1>Pedido Finalizado</h1>
                <ImgCheck src='https://i.ibb.co/N6QVFtx/check.png' alt='check' />
            </span>
            <TextCliente><b>Nome do cliente:</b> {} </TextCliente>
            <TextNumero><b>Telefone:</b> {} </TextNumero>

            <TextRecheio><b>Recheio escolhido:</b> {} </TextRecheio>
            <TextTamanho><b>Tamanho escolhido:</b> {} </TextTamanho>
            <TextCobertura><b>Cobertura escolhida:</b> {}</TextCobertura>

            <TextPreco>Total a pagar: {} </TextPreco>

        </Container>
    )
}


export default ModalFinalizado