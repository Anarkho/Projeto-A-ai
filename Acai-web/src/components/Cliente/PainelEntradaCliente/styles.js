import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
`
export const TextTitulo = styled.h1`
    margin: 0;
`
export const TextSubtitulo = styled.h2`
`
export const TextNome = styled.text`
    border-radius: 5px;
    font-size: 1.5rem;
    color: black;
`

export const InputNome = styled.input`
    margin-left: 10px;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
`

export const TextNumero = styled.text`
    border-radius: 5px;
    font-size: 1.5rem;
    color: black;
`
export const InputNumero = styled.input`
    margin-left: 10px;
    padding: 5px;
    margin-top: 10px;
    border-radius: 5px;
`
export const ContainerButton = styled.div`
    height: 100vh;
    display: flex;
    align-items: flex-end;
`
export const BtnPedir = styled.button`
    height: max-content;
    width: 100%;
    border-radius: 5px;
    border: none;
    font-size: 1.7rem;
    font-family: fantasy,Arial, Helvetica, sans-serif;
    transition-duration: 0.2s;
    margin-bottom: 5px;
    background-color: rgb(255,100,100);

    :hover{
        background-color: rgb(240,100,60);
    }
    :active{
        background-color: black;
        color: white;
    }
`