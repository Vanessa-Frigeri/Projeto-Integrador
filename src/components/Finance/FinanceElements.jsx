import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const FinanceContainer = styled.div`
  width: 100%;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FinancePathItem = styled.li`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const FinancePath = styled.ul`
  display: flex;
  width: 100%;
  padding: 10px 16px;
  list-style: none;
  background-color: var(--purple-100);
  padding: 0.5rem calc((100vw - 1200px) / 2);

  ${FinancePathItem} + ${FinancePathItem}::before{
    padding: .5rem;
    color: var(--purple-500);
    content: ">"; 
    font-weight: bold ;
  }
  
`;

export const FinancePathItemLink = styled(LinkR)`
  cursor: pointer; 
  text-decoration: none;
  color: var(--purple-900);
`;

export const FinancePaymentsAll = styled.button`
  background-color: #32cd32;
  border-radius: 10px;
  margin-left: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const FinanceExpensesAll = styled(FinancePaymentsAll)`

`;

export const FinanceLink = styled(LinkR)`
  cursor: pointer; 
  text-decoration: none;
  color: var(--purple-900);
  
`;

export const FinanceBoxLists = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-around;
  background-color: green;
  width: 85%;
`;
export const FinanceBoxPayments = styled.div`
  background-color: #fff;
  width: 80%;
`;

export const FinanceBoxExpenses = styled.div`
  background-color: #fff;
  width: 80%;
`;

export const FinanceListPayments = styled.div`
  background-color: #fff;
`;

export const FinanceListExpenses = styled.div`
  background-color: #fff;
`;

export const FinanceButtonAdd = styled.button`
  background-color: #9c24b4;
  color: white;
  border-radius: 10px;
  margin-left: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
`;