import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const TaskContainer = styled.div`
  width: 100%;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TaskPathItem = styled.li`
  font-size: 1.5rem;
`;

export const TaskPath = styled.ul`
  display: flex;
  width: 100%;
  padding: 10px 16px;
  list-style: none;
  background-color: var(--purple-100);
  padding: 0.5rem calc((100vw - 1200px) / 2);

  ${TaskPathItem} + ${TaskPathItem}::before{
    padding: .5rem;
    color: var(--purple-500);
    content: ">"; 
    font-weight: bold ;
  }
  
`;

export const TaskPathItemLink = styled(LinkR)`
  cursor: pointer; 
  text-decoration: none;
  color: var(--purple-900);
`;

export const TaskTable = styled.table`
  width: 50%;
  border-collapse: collapse;
  text-align: left;
`;

export const TaskTableRow = styled.tr`
  padding: .5rem;
  border-right: 1px;
  border-left: 1px;
  border-bottom: 1px;
  border-style: solid;
  border-color: #000;
`;

export const TaskTableColumnName = styled.th`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const TaskTableRowValue = styled.td`
  padding: .5rem;
`;

export const TaskButton = styled.button`
  border: none;
  width: 10rem;
  padding: .5rem 0;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: green;
  background-color: white;
  border: 1px solid green;
`;