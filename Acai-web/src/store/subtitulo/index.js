export const subtituloReducer = (state, action) => {
    switch (action.type) {
        case 'ALTERAR_SUBTITULO_RECHEIO':
            return {...state, titulo: action.payload }
        default:
            return state
    }
}