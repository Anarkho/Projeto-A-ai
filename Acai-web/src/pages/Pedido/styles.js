import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 height: 70%;
 width: 60%;
 border-radius: 15px;
 background-color: white;
 justify-content: center;

 @media (max-width: 700px ) {
    div{
     font-size: small;

    } 
 }
`

