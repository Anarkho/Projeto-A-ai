export const displayReducer = (state, action) => {
    switch (action.type) {
        case 'MOSTRAR_DISPLAY_CLIENTE':
            return {...state, displayCliente: action.payload }
        case 'ESCONDER_DISPLAY_CLIENTE':
            return {...state, displayCliente: action.payload }
        case 'MOSTRAR_DISPLAY_ENTRADA_CLIENTE':
            return {...state, displayCliente: action.payload }
        case 'ESCONDER_DISPLAY_ENTRADA_CLIENTE':
            return {...state, displayCliente: action.payload }
            ////////////////////////////////////////////////
        case 'MOSTRAR_DISPLAY_PEDIDO':
            return {...state, displayPedido: action.payload }
        case 'ESCONDER_DISPLAY_PEDIDO':
            return {...state, displayPedido: action.payload }
        case 'MOSTRAR_DISPLAY_RECHEIO':
            return {...state, displayR: action.payload }
        case 'ESCONDER_DISPLAY_RECHEIO':
            return {...state, displayR: action.payload }
        case 'MOSTRAR_DISPLAY_TAMANHO':
            return {...state, displayT: action.payload }
        case 'ESCONDER_DISPLAY_TAMANHO':
            return {...state, displayT: action.payload }
        case 'MOSTRAR_DISPLAY_COBERTURA':
            return {...state, displayC: action.payload }
        case 'ESCONDER_DISPLAY_COBERTURA':
            return {...state, displayC: action.payload }
        case 'MOSTRAR_DISPLAY_MODAL':
            return {...state, displayM: action.payload }
        case 'ESCONDER_DISPLAY_MODAL':
            return {...state, displayM: action.payload }
        case 'MOSTRAR_DISPLAY_BOTAO_DIRECAO':
            return {...state, displayBD: action.payload }
        case 'ESCONDER_DISPLAY_BOTAO_DIRECAO':
            return {...state, displayBD: action.payload }
        case 'MOSTRAR_DISPLAY_BOTAO_STATUS':
            return {...state, displayBS: action.payload }
        case 'ESCONDER_DISPLAY_BOTAO_STATUS':
            return {...state, displayBS: action.payload }
        default:
            return state
    }
}