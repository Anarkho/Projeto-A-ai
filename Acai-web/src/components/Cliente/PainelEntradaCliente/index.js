import React, { useContext, createContext, useReducer } from 'react'
import { displayContext } from '../../../App'
import { clienteReducer } from '../../../store/cliente'
import { http } from '../../../services/api'
import {
    BtnPedir,
    Container,
    ContainerButton,
    InputNome,
    InputNumero,
    TextNome,
    TextNumero,
    TextSubtitulo,
    TextTitulo
} from './styles'

export let resposta = []
export const clienteContext = createContext()

const PainelEntradaCliente = () => {

    ///////////////////////////////////////////////////////////////////////////
    const initCliente = {
        dados: { nome: '', telefone: '' },
    }
    const [cliente, setcliente] = useReducer(clienteReducer, initCliente)
    ///////////////////////////////////////////////////////////////////////////

    const { display, setdisplay } = useContext(displayContext)

    const cadastrarCliente = () => {
        if(cliente.nome !== '' && cliente.telefone !== ''){
            let payload = {nome: cliente.nome, telefone: cliente.telefone}
            http.post('/clientes', payload )
            .then(response =>{
                resposta = response.data
                console.log(resposta)
                setcliente({
                    type: 'ADD_NOME',
                    payload: ''
                })
                setcliente({
                    type: 'ADD_TELEFONE',
                    payload: ''
                })
            })
            .catch(console.log('não foi possivel cadastrar'))
        }
    }

    return (
        <Container style={{ display: display.displayCliente }}>
            {/* mesmo que setdisplay((previousState)=>{return previousState}) */}
            <clienteReducer value={{ cliente, setcliente }}>
                <TextTitulo>Cliente</TextTitulo>
                <TextSubtitulo>Entre com seus dados</TextSubtitulo>
                <div
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextNome>Nome</TextNome>
                    <InputNome
                        placeholder='Digite seu nome!'
                        value={cliente.nome}
                        onChange={(e) => {
                            setcliente({
                                type: 'ADD_NOME',
                                payload: e.target.value
                            })
                        }} />

                    <TextNumero>Numero</TextNumero>
                    <InputNumero
                        maxLength='11'
                        placeholder=' Digite numero para contato!'
                        value={cliente.telefone}
                        onChange={(e) => {
                            setcliente({
                                type: 'ADD_TELEFONE',
                                payload: e.target.value
                            })
                        }} />
                </div>

                <ContainerButton>
                    <BtnPedir onClick={() => {
                        setdisplay({
                            type: 'ESCONDER_DISPLAY_ENTRADA_CLIENTE',
                            payload: 'none',
                        }
                        )
                        setdisplay({
                            type: 'MOSTRAR_DISPLAY_PEDIDO',
                            payload: 'flex'
                        })
                        setdisplay({
                            type: 'MOSTRAR_DISPLAY_RECHEIO',
                            payload: 'flex'
                        })
                        cadastrarCliente()
                    }}>
                        FAZER PEDIDO
                    </BtnPedir >
                </ContainerButton>
            </clienteReducer>

        </Container>
    )
}
export default PainelEntradaCliente