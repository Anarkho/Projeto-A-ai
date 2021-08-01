import React, { useContext } from 'react'
import { displayContext } from '../../../App'
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
    const { display, setdisplay } = useContext(displayContext)

    return (
        <Container style={{ display: display }}>
            {/* mesmo que setdisplay((previousState)=>{return previousState}) */}
            <TextTitulo>Cliente</TextTitulo>
            <TextSubtitulo>Entre com seus dados</TextSubtitulo>
            <div
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextNome>Nome</TextNome>
                <InputNome />

                <TextNumero>Numero {display}</TextNumero>
                <InputNumero maxLength='11' />
            </div>

            <ContainerButton>
                <BtnPedir onClick={() => {
                    setdisplay({
                        type: 'ESCONDER_DISPLAY_ENTRADA_CLIENTE',
                        payload: 'none'
                    })
                }}>
                    FAZER PEDIDO
                </BtnPedir>
            </ContainerButton>

        </Container>
    )
}
export default PainelEntradaCliente