import React from 'react';
import Header from '../Header';
import Container from '../Container';
import ListPayments from '../ListPayments';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {
  FinancePaymentsContainer,
  FinancePaymentsPath,
  FinancePaymentsPathItem,
  FinancePaymentsPathItemLink,
  FinancePaymentsTab
} from './FinancePaymentsElements';

const FinancePayments = () => (
  <>
    <Header/>
    <Container>
      <FinancePaymentsContainer>
        <FinancePaymentsPath>
          <FinancePaymentsPathItem>
            <FinancePaymentsPathItemLink to="/finance">Carteira</FinancePaymentsPathItemLink>          
          </FinancePaymentsPathItem>
          <FinancePaymentsPathItem>
            <FinancePaymentsPathItemLink to="/finance/FinancePayments">Pagamentos</FinancePaymentsPathItemLink>          
          </FinancePaymentsPathItem>
        </FinancePaymentsPath>
        <FinancePaymentsTab>
        <Tabs defaultActiveKey="all" md={4}>
          <Tab eventKey="all" title="Tudo">
            <ListPayments/>
          </Tab>
          <Tab eventKey="pendents" title="Pendentes">
            <ListPayments/>
          </Tab>
          <Tab eventKey="accept" title="Aprovados">
            <ListPayments/>
          </Tab>
          <Tab eventKey="reject" title="Rejeitados">
            <ListPayments/>
          </Tab>
        </Tabs>
        </FinancePaymentsTab>
      </FinancePaymentsContainer>
    </Container>
  </>
);

export default FinancePayments;