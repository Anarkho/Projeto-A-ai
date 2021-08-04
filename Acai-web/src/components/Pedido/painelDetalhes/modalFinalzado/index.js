import React, { useContext, useEffect, useState } from 'react'
import { displayContext, subtituloContext } from '../../../../App'
import { http } from '../../../../services/api'
import { resposta } from '../../../Cliente/PainelEntradaCliente'

import {
    Container,
    TextCliente,
    TextNumero,
    TextCobertura,
    TextRecheio,
    TextPreco,
    TextTamanho,
    ImgCheck,
    BtnFechar
} from './styles'

const ModalFinalizado = () => {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [recheio, setRecheio] = useState('')
    const [tamanho, setTamanho] = useState('')
    const [cobertura, setCobertura] = useState('')
    const [preco, setPreco] = useState('')
    const [condicao, setcondicao] = useState(true)

    const { display, setdisplay } = useContext(displayContext)
    const { setsubtitulo } = useContext(subtituloContext)

    const listar = async () => {
        if (resposta.id !== '') {
            http.get(`/clientes/${resposta.id}/pedido`).then(response => {
                console.log('re', response.data[0].recheio)
                setRecheio(response.data[0].recheio)
            })
            http.get(`/clientes/${resposta.id}`).then(response => {
                const dado = response.data
                setNome(dado.nome)
                setTelefone(dado.telefone)
            })
        }
       

    }
    if (display.displayM === 'flex' && condicao === true) {
        listar()
        setcondicao(false)
    }

    return (
        <Container style={{ display: display.displayM }} className='container'>
            <span>
                <h1 style={{ margin: 0 }}>Pedido Finalizado</h1>
                <ImgCheck src='https://i.ibb.co/N6QVFtx/check.png' alt='check' />
            </span>
            <TextCliente><b>Nome do cliente:</b> {nome.toUpperCase()}</TextCliente>
            <TextNumero><b>Telefone:</b> {telefone} </TextNumero>

            <TextRecheio><b>Recheio escolhido:</b> {recheio} </TextRecheio>
            <TextTamanho><b>Tamanho escolhido:</b>  </TextTamanho>
            <TextCobertura><b>Cobertura escolhida:</b> </TextCobertura>

            <TextPreco>Total a pagar:  </TextPreco>

            <BtnFechar
                onClick={() => {
                    setdisplay({
                        type: 'ESCONDER_DISPLAY_MODAL',
                        payload: 'none'
                    })
                    setdisplay({
                        type: 'MOSTRAR_DISPLAY_CLIENTE',
                        payload: 'flex'
                    })
                    setsubtitulo({
                        type: 'ALTERAR_SUBTITULO_RECHEIO',
                        payload: 'Qual o recheio do seu açai?'
                    })
                    setcondicao(true)
                    setNome('')
                    setTelefone('')
                }}>
                FECHAR
            </BtnFechar>

        </Container>
    )
}


export default ModalFinalizado