import React, { useEffect, useContext, useState } from 'react'
import { displayContext } from '../../../../App'
import {http} from '../../../../services/api'

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
const ModalFinalizado = () => {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [recheio, setRecheio] = useState('')
    const [tamanho, setTamanho] = useState('')
    const [cobertura, setCobertura] = useState('')
    const [preco, setPreco] = useState('')

    const { display, setdisplay } = useContext(displayContext)


    useEffect(() => {
       listar() 
    },[])

    function listar(){
            http.get('/clientes').then(response => {
                resposta = response.data[0]
                setNome(resposta.nome)
                setTelefone(resposta.telefone)
                const pedido = resposta.pedidos[0]
                setRecheio(pedido.recheio)
                setTamanho(pedido.tamanho)
                setCobertura(pedido.cobertura)
                setPreco(pedido.preco)
            })

            setInterval(() => {
                setdisplay({
                    type: 'ESCONDER_DISPLAY_MODAL',
                    payload: 'none'
                })
               }, 5000);
               console.log('ok baby')
    }
    
    return (
        <Container style={{ display: display.displayM }} className='container'>
            <span>
                <h1>Pedido Finalizado</h1>
                <ImgCheck src='https://i.ibb.co/N6QVFtx/check.png' alt='check' />
            </span>
            <TextCliente><b>Nome do cliente:</b> {nome} </TextCliente>
            <TextNumero><b>Telefone:</b> {telefone} </TextNumero>

            <TextRecheio><b>Recheio escolhido:</b> {recheio} </TextRecheio>
            <TextTamanho><b>Tamanho escolhido:</b> {tamanho} </TextTamanho>
            <TextCobertura><b>Cobertura escolhida:</b> {cobertura}</TextCobertura>

            <TextPreco>Total a pagar: {preco} </TextPreco>

        </Container>
    )
}


export default ModalFinalizado