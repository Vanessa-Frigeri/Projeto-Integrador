import React from 'react';
import Header from '../Header';
import Container from '../Container';
import {
  ListExpensesContainer,
  ListExpensesPath,
  ListExpensesPathItem,
  ListExpensesPathItemLink
} from './ListExpensesElements';

const ListExpenses = () => (
  <>
    <Header/>
    <Container>
      <ListExpensesContainer>
        <ListExpensesPath>
          <ListExpensesPathItem>
            <ListExpensesPathItemLink to="/finance">Carteira</ListExpensesPathItemLink>          
          </ListExpensesPathItem>
          <ListExpensesPathItem>
            <ListExpensesPathItemLink to="/finance/listExpenses">Despesas</ListExpensesPathItemLink>          
          </ListExpensesPathItem>
        </ListExpensesPath>
        <h1>Aqui vai as Despesas</h1>
      </ListExpensesContainer>
    </Container>
  </>
);

export default ListExpenses;