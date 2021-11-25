import React from 'react';
import styled from 'styled-components';

const Container = (props) => {
  return(
    <ContainerBox>
     {props.children}
    </ContainerBox>
  );
}

const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92vh;
  width: 100vw;

  @media screen and (max-width:540px){
    flex-direction: column;
    height: 100%;  
    width: 100%;  
  }

  @media screen and (min-width:541px) and (max-width:678px){   
    flex-direction: column;
    height: 100%;  
    width: 100%;
    
  }

  @media screen and (min-width:679px) and (max-width:768px){ 
    align-items: flex-start;  
    width: 100%; 
  }

  @media screen and (min-width: 769px) and (max-width: 1024px){
    align-items: flex-start;
    width: 100%;
  }

  @media screen and (min-width: 1025px){    
    align-items: flex-start;
    width: 100%;
  }

`;

export default Container;