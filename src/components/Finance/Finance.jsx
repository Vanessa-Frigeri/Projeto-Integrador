import React from 'react';
import Header from '../Header';
import Container from '../Container';
import {
  FinanceContainer,
  FinancePath,
  FinancePathItem,
  FinancePathItemLink,
  FinanceBtnPayments,
  FinanceBtnExpenses,
  FinanceLink
} from './FinanceElements';

const Finance = () => (
  <>
    <Header/>
    <Container>
      <FinanceContainer>
        <FinancePath>
          <FinancePathItem>
            <FinancePathItemLink to="/finance">Carteira</FinancePathItemLink>          
          </FinancePathItem>
        </FinancePath>
        <FinanceBtnPayments>
          <FinanceLink to="/finance/listPayments">
            Pagamentos
          </FinanceLink>
        </FinanceBtnPayments>
        <FinanceBtnExpenses>
          <FinanceLink to="/finance/listExpenses">
            Despesas
          </FinanceLink>
        </FinanceBtnExpenses>
      </FinanceContainer>
    </Container>
  </>  
);

export default Finance;