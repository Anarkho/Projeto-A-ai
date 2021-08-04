import React, { useContext, useEffect } from 'react'
import { displayContext } from '../../../App'
import { BtnRecheio, Container } from './styles'
import './recheio.scss'
import { subtituloContext } from '../../../App'
import { pedidoContext } from '../../../pages/Pedido'
import { resposta } from '../../Cliente/PainelEntradaCliente'
import { http } from '../../../services/api'
import { BtnPedir } from '../../Cliente/PainelEntradaCliente/styles'


const PainelRecheio = () => {


    const { display, setdisplay } = useContext(displayContext)
    const { setsubtitulo } = useContext(subtituloContext)
    const { pedido, setpedido } = useContext(pedidoContext)

    const atualizaRecheio = () => {
        let payload = { recheio: pedido.recheio }
        http.post(`/clientes/${resposta.id}/pedido`, payload)
            .then(response => {
                console.log(pedido.recheio, 'recheio')
            })
    }

    return (
        <Container style={{ display: display.displayR }} className='container'>
            <BtnRecheio className='morango'
                onClick={() => {
                    setdisplay({
                        type: 'ESCONDER_DISPLAY_RECHEIO',
                        payload: 'none',
                    })
                    setdisplay({
                        type: 'MOSTRAR_DISPLAY_TAMANHO',
                        payload: 'flex'
                    })
                    setsubtitulo({
                        type: 'ALTERAR_SUBTITULO_RECHEIO',
                        payload: 'Qual o tamanho do seu açai?'
                    })
                    setpedido({
                        type: 'ADD_RECHEIO',
                        payload: 'MORANGO',
                    })
                    atualizaRecheio()
                    
                }}>
                MORANGO
            </BtnRecheio>
            <BtnRecheio className='banana'
                onClick={() => {
                    setdisplay({
                        type: 'ESCONDER_DISPLAY_RECHEIO',
                        payload: 'none',
                    })
                    setdisplay({
                        type: 'MOSTRAR_DISPLAY_TAMANHO',
                        payload: 'flex'
                    })
                    setsubtitulo({
                        type: 'ALTERAR_SUBTITULO_RECHEIO',
                        payload: 'Qual o tamanho do seu açai?'
                    })
                    setpedido({
                        type: 'ADD_RECHEIO',
                        payload: 'BANANA'
                    })
                    atualizaRecheio()
                }}>
                BANANA
            </BtnRecheio>
            <BtnRecheio classname='kiwi'
                onClick={() => {
                    setdisplay({
                        type: 'ESCONDER_DISPLAY_RECHEIO',
                        payload: 'none',
                    })
                    setdisplay({
                        type: 'MOSTRAR_DISPLAY_TAMANHO',
                        payload: 'flex'
                    })
                    setsubtitulo({
                        type: 'ALTERAR_SUBTITULO_RECHEIO',
                        payload: 'Qual o tamanho do seu açai?'
                    })
                    setpedido({
                        type: 'ADD_RECHEIO',
                        payload: 'KIWI'
                    })
                    atualizaRecheio()
                }}>
                KIWI
            </BtnRecheio>

        </Container>
    )
}

export default PainelRecheio