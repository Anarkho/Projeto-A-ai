import React from 'react'
import { Container, Text, Opcao, Selecao, TextPreco} from './styles'
import './detalhes.scss'

const PainelDetalhes = () => {

    return (
        <Container style={{display: 'none'}} className='container'>
            <span><Text>Recheio: </Text>
                <Selecao disabled id="recheio">
                    <Opcao value="morango"> MORANGO</Opcao>
                    <Opcao value="banana">BANANA</Opcao>
                    <Opcao value="kiwi">KIWI</Opcao>
                </Selecao>
            </span>
            <span><Text>Tamanho: </Text>
                <Selecao disabled id="tamanho">
                    <Opcao value="pequeno"> PEQUENO 300ml</Opcao>
                    <Opcao value="medio">MEDIO 500ml</Opcao>
                    <Opcao value="grande">GRANDE 700ml</Opcao>
                </Selecao>
            </span>
            <span><Text>Cobertura: </Text>
                <Selecao disabled id="cobertura">
                    <Opcao value="granola"> GRANOLA</Opcao>
                    <Opcao value="pacoca">PAÇOCA</Opcao>
                    <Opcao value="leiteNinho">LEITE NINHO</Opcao>
                </Selecao>
            </span>
            <TextPreco>Preço: R$ 3,90</TextPreco>
        </Container>
    )
}

export default PainelDetalhes