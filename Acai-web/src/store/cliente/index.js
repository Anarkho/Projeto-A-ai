export const clienteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOME':
            return { ...state, nome: action.payload }
        case 'ADD_TELEFONE':
            return { ...state, telefone: action.payload }
        default:
            return state
    }
}