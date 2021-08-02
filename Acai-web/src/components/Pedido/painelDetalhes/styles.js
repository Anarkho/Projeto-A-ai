import styled from "styled-components";

export const Container = styled.div`
    display: none;
    flex-direction: column;
    height: 100%;
    width: 100vw;
    justify-content: center;
    align-items: center;
    
    @media(max-width: 640px) {
    width: 50%;
  }
`

export const Text = styled.text`
    font-size: 1.2rem;
`
export const TextPreco = styled.text`
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 10px;
`
export const Selecao = styled.select`
   background-color: white;
   font-weight: bold;
`
export const Opcao = styled.option`
   background-color: whitesmoke;
`

