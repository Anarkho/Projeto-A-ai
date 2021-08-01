export const displayReducer = (state, action) => {
    switch (action.type) {
        case 'MOSTRAR_DISPLAY_CLIENTE':
            return action.payload;
        case 'ESCONDER_DISPLAY_CLIENTE':
            return action.payload;
        case 'MOSTRAR_DISPLAY_ENTRADA_CLIENTE':
            return action.payload;
        case 'ESCONDER_DISPLAY_ENTRADA_CLIENTE':
            return action.payload;
        default:
            return state
    }
}