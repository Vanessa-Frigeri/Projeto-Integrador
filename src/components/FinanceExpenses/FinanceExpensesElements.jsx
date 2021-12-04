import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const FinanceExpensesContainer = styled.div`
  width: 100%;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FinanceExpensesPathItem = styled.li`
  font-size: 1.5rem;
`;

export const FinanceExpensesPath = styled.ul`
  display: flex;
  width: 100%;
  padding: 10px 16px;
  list-style: none;
  background-color: var(--purple-100);
  padding: 0.5rem calc((100vw - 1200px) / 2);

  ${FinanceExpensesPathItem} + ${FinanceExpensesPathItem}::before{
    padding: .5rem;
    color: var(--purple-500);
    content: ">"; 
    font-weight: bold ;
  }
  
`;

export const FinanceExpensesPathItemLink = styled(LinkR)`
  cursor: pointer; 
  text-decoration: none;
  color: var(--purple-900);
`;

export const FinanceExpensesTab = styled.div`
  width: 70%;
`;