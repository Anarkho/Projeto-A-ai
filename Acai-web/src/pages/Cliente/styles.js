import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 70%;
    width: 40%;
    border-radius: 15px;
    background-color: white;
    justify-content: center;

    @media (max-width: 830px ) {
      height: 90%;
      div {
       font-size:0.6rem;
      } 
      
    }
    @media(orientation: portrait){
        margin: 0;
        width: 90%;
    }
`