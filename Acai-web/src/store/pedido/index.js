export const pedidoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_RECHEIO':
            return { ...state, recheio: action.payload }
        case 'ADD_TAMANHO':
            return { ...state, tamanho: action.payload }
        case 'ADD_COBERTURA':
            return { ...state, cobertura: action.payload }
        default:
            return state
    }
}