import React from 'react'
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

const PainelEntradaCliente = () => {
    return (
        <Container style={{display: ''}}>
            
            <TextTitulo>Cliente</TextTitulo>
            <TextSubtitulo>Entre com seus dados</TextSubtitulo>
            <div 
            style={{display: 'flex',flexDirection: 'column',height: '100%', alignItems: 'center', marginTop: '7%'}}>
            <TextNome>Nome</TextNome>
            <InputNome />

            <TextNumero>Numero</TextNumero>
            <InputNumero maxLength='11' />
            </div>
            

            <ContainerButton>
                <BtnPedir>FAZER PEDIDO</BtnPedir>
            </ContainerButton>



        </Container>
    )
}
export default PainelEntradaCliente