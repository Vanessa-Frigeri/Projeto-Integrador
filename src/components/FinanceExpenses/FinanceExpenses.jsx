import React from 'react';
import Header from '../Header';
import Container from '../Container';
import ListExpenses from '../ListExpenses';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {
  FinanceExpensesContainer,
  FinanceExpensesPath,
  FinanceExpensesPathItem,
  FinanceExpensesPathItemLink,
  FinanceExpensesTab
} from './FinanceExpensesElements';

const FinanceExpenses = () => (
  <>
    <Header/>
    <Container>
      <FinanceExpensesContainer>
        <FinanceExpensesPath>
          <FinanceExpensesPathItem>
            <FinanceExpensesPathItemLink to="/finance">Carteira</FinanceExpensesPathItemLink>          
          </FinanceExpensesPathItem>
          <FinanceExpensesPathItem>
            <FinanceExpensesPathItemLink to="/finance/FinanceExpenses">Despesas</FinanceExpensesPathItemLink>          
          </FinanceExpensesPathItem>
        </FinanceExpensesPath>
        <FinanceExpensesTab>
        <Tabs defaultActiveKey="all" md={4}>
          <Tab eventKey="all" title="Tudo">
            <ListExpenses/>
          </Tab>
          <Tab eventKey="pendents" title="Pendentes">
            <ListExpenses/>
          </Tab>
          <Tab eventKey="accept" title="Aprovadas">
            <ListExpenses/>
          </Tab>
          <Tab eventKey="reject" title="Rejeitadas">
            <ListExpenses/>
          </Tab>
        </Tabs>
        </FinanceExpensesTab>
      </FinanceExpensesContainer>
    </Container>
  </>
);

export default FinanceExpenses;