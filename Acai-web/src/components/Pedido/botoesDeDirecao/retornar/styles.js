import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: max-content;
    position: absolute;
    left: 17%;
    align-items: center;
    justify-content: center;
    

`

export const BtnRetorne = styled.button`
    width: 50px;
    height: 60px;
    color: white;
    font-size: 1.8rem;
    background-color: rgb(255,100,100);
    border-radius: 10px;
    border: none;
    transform: scaleX(-1) perspective(10px) rotateY(1deg);

    :hover{
        background-color: rgb(240,100,60);
    }
    :active{
        background-color: black;
    }
`