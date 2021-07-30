import styled from 'styled-components'

export const Container = styled.div`
display: flex;
height: 100%;
justify-content: space-around;
align-items: center;
width: 100vw;

@media(orientation: portrait) {
    width: 100%;
    justify-content: space-space-around;
    flex-direction: column;
    align-items: center;
  }

`

export const BtnRecheio = styled.button`
  opacity: 0.5;
  height: 50%;
  font-size: 2rem;
  font-weight: bold;
  font-family: fantasy, Arial, Helvetica, sans-serif;
  letter-spacing: 8px;
  width: 27%;
  background-color: white;
  color: black;
  border-radius: 50%;
  border: 0;
  background-image: url("https://hiperideal.vteximg.com.br/arquivos/ids/167649-1000-1000/17523.jpg?v=636615816105370000");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center ;
  
  &.morango{
      background-image: url("https://organicossaocarlos.com.br/wp-content/uploads/2019/07/morango.jpg");
  };
  &.banana{
      background-image: url("https://arcomixstr.blob.core.windows.net/product/5985-banana-granayne-kg-g.jpg");
  };
  &.kiwi{
      background-image: url("https://hiperideal.vteximg.com.br/arquivos/ids/167649-1000-1000/17523.jpg?v=636615816105370000");
  }

  :hover{
      opacity: 1;
      transition-duration: 0.5s;
      transform: scale(1.2);
  }

  @media(orientation: portrait){
        width: 50px;
        height: 50px;
        font-size: 1rem;
  }
  @media (max-width: 850px){
        width: 80px;
        height: 80px;
        font-size: 1rem;
  }

`

