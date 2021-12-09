import React from 'react';
import Header from '../Header';
import Container from '../Container';
import em_construcao from '../../assets/images/em_construcao.jpg';
import {
  PrincipalContainer,
  Calendar,
  PrincipalBox,
  ListTask,
  ListFinance,
  Image
} from './PrincipalElements';

const Principal = () => (
  <>
    <Header />
    <Container>
      <PrincipalContainer>
        <Calendar><Image src={em_construcao} alt="calendario" /></Calendar>
        <PrincipalBox>
          <ListTask><Image src={em_construcao} alt="tarefas" /></ListTask>
          <ListFinance><Image src={em_construcao} alt="financeiro" /></ListFinance>
        </PrincipalBox>
      </PrincipalContainer>
    </Container>
  </>
);

export default Principal;