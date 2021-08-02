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
        <Container style={{ display: display.displayCliente }}>
            {/* mesmo que setdisplay((previousState)=>{return previousState}) */}
            <TextTitulo>Cliente</TextTitulo>
            <TextSubtitulo>Entre com seus dados</TextSubtitulo>
            <div
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextNome>Nome</TextNome>
                <InputNome />

                <TextNumero>Numero</TextNumero>
                <InputNumero maxLength='11' />
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
                }}>
                    FAZER PEDIDO
                </BtnPedir>
            </ContainerButton>

        </Container>
    )
}
export default PainelEntradaCliente