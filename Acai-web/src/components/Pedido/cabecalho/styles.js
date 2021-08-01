import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0
`
export const Titulo = styled.h1`
    color: white;
    margin: 0;
`
export const Escolha = styled.h2`
    color: black;
    margin-top: 20px;
    margin-bottom: 0;

    @media(min-width: 720px ){
        margin-top: 35px;
    }
`