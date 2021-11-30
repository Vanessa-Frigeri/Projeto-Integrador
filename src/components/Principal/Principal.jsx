import React from 'react';
import Header from '../Header';
import Container from '../Container';
import {
  PrincipalContainer,
  Calendar,
  PrincipalBox,
  ListTask,
  ListFinance,
  ListMessage
} from './PrincipalElements';

const Principal = () => (
  <>
    <Header/>
    <Container>
      <PrincipalContainer>
        <Calendar>Aqui vai ficar o calendario</Calendar>
        <PrincipalBox>
          <ListTask>Lista de Tarefas</ListTask>
          <ListFinance>Lista de Pagamentos e Despesas</ListFinance>
          <ListMessage>Lista de Recados</ListMessage>
        </PrincipalBox>
      </PrincipalContainer>      
    </Container>
  </>
);

export default Principal;