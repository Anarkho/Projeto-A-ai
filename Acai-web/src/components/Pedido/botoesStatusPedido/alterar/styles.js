import styled from "styled-components";

export const Container = styled.div`
    display: none;
    width: max-content;
    align-items: flex-start;
    border-radius: 5px;
    position: absolute;
    left: 30%;
    bottom: 18%;
`
export const BtnAlterar = styled.button`
    height: 35px;
    width: 90px;
    color: #1c1c1c;
    background-color: orange;
    font-family: fantasy, Arial, Helvetica, sans-serif;
    border: none;
    border-radius: 5px;
    letter-spacing: 2px;
    font-size: 1.2rem;
    text-align: center;

    :active{
        background-color: orangered;
    }

    @media(orientation: portrait){
       margin-left: -100%;
    }
`