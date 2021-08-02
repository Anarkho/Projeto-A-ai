import styled from "styled-components";

export const Container = styled.div`
    display: none;
    width: max-content;
    align-items: flex-start;
    border-radius: 5px;
    position: absolute;
    right: 30%;
    bottom: 18%;
`
export const BtnFinalizar = styled.button`
    height: 35px;
    width: 100px;
    color: #1c1c1c;
    background-color: greenyellow;
    font-family: fantasy, Arial, Helvetica, sans-serif;
    border: none;
    border-radius: 5px;
    letter-spacing: 2px;
    font-size: 1.2rem;
    text-align: center;

    :active{
        background-color: forestgreen;
    }
    @media(orientation: portrait){
       margin-left: 50%;
    }
`