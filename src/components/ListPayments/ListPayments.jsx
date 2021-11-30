import React from 'react';
import Header from '../Header';
import Container from '../Container';
import {
  ListPaymentsContainer,
  ListPaymentsPath,
  ListPaymentsPathItem,
  ListPaymentsPathItemLink
} from './ListPaymentsElements';

const ListPayments = () => (
  <>
    <Header/>
    <Container>
      <ListPaymentsContainer>
        <ListPaymentsPath>
          <ListPaymentsPathItem>
            <ListPaymentsPathItemLink to="/finance">Carteira</ListPaymentsPathItemLink>          
          </ListPaymentsPathItem>
          <ListPaymentsPathItem>
            <ListPaymentsPathItemLink to="/finance/listPayments">Pagamentos</ListPaymentsPathItemLink>          
          </ListPaymentsPathItem>
        </ListPaymentsPath>
        <h1>Aqui vai os pagamentos</h1>
      </ListPaymentsContainer>
    </Container>
  </>
);

export default ListPayments;