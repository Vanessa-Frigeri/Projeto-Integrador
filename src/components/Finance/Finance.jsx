import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Header from '../Header';
import Container from '../Container';
import Modal from '../Modal';
import ListFinanceReduce from '../ListFinancetReduce';
import NewPayment from '../NewPayment';
import NewExpense from '../NewExpense';
import {
  FinanceContainer,
  FinancePath,
  FinancePathItem,
  FinancePathItemLink,
  FinancePaymentsAll,
  FinanceExpensesAll,
  FinanceLink,
  FinanceListPayments,
  FinanceListExpenses,
  FinanceBoxLists,
  FinanceBoxPayments,
  FinanceBoxExpenses,
  FinanceButtonAdd
} from './FinanceElements';

const Finance = () => {
  const [showModalNewExpense, setShowModalNewExpense] = useState(false);
  const [showModalNewPayment, setShowModalNewPayment] = useState(false);

  const openModalNewExpense = () => {
    setShowModalNewExpense((prev) => !prev);
  };

  const openModalNewPayment = () => {
    setShowModalNewPayment((prev) => !prev);
  };

  return (
    <>
      <Header/>
      <Container>
        <FinanceContainer>
          <FinancePath>
            <FinancePathItem>
              <FinancePathItemLink to="/finance">Carteira</FinancePathItemLink>          
            </FinancePathItem>
          </FinancePath>
          <FinanceBoxLists>
            <FinanceBoxPayments>
              <FinanceButtonAdd type="button" onClick={openModalNewPayment}>
                <FaPlus/> Pagamento
              </FinanceButtonAdd>
              <FinanceListPayments>
                  <ListFinanceReduce/>
              </FinanceListPayments>
              <FinancePaymentsAll>
                <FinanceLink to="/finance/payments">
                  Ver todos
                </FinanceLink>              
              </FinancePaymentsAll>
            </FinanceBoxPayments>
            <FinanceBoxExpenses>
              <FinanceButtonAdd type="button" onClick={openModalNewExpense}>
                <FaPlus/> Despesa
              </FinanceButtonAdd>
              <FinanceListExpenses>
                <ListFinanceReduce/>
              </FinanceListExpenses>
              <FinanceExpensesAll>
                <FinanceLink to="/finance/expenses">
                  Ver todos
                </FinanceLink>         
              </FinanceExpensesAll>
            </FinanceBoxExpenses>
          </FinanceBoxLists>
        </FinanceContainer>
        <Modal
        showModal={showModalNewExpense}
        setShowModal={setShowModalNewExpense}
        >
          <NewExpense />
        </Modal>
        <Modal
        showModal={showModalNewPayment}
        setShowModal={setShowModalNewPayment}
        >
          <NewPayment />
        </Modal>
      </Container>
    </>  
  );
};
export default Finance;