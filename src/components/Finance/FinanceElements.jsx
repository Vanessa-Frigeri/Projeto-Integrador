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

export const FinanceBtnPayments = styled.button`

`;

export const FinanceBtnExpenses = styled(FinanceBtnPayments)``;

export const FinanceLink = styled(LinkR)`
  cursor: pointer; 
  text-decoration: none;
  color: var(--purple-900);
`;