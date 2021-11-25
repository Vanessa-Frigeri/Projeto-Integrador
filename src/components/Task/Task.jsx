import React from 'react';
import Header from '../Header';
import Container from '../Container';
import {
  TaskContainer,
  TaskPath,
  TaskPathItem,
  TaskPathItemLink,
  TaskTable,
  TaskTableRow,
  TaskTableColumnName,
  TaskTableRowValue,
  TaskButton
} from './TaskElements';

const Task = () => (
  <>
    <Header/>
    <Container>
      <TaskContainer>
        <TaskPath>
          <TaskPathItem>
            <TaskPathItemLink to="/task">Nome da Lista</TaskPathItemLink>          
          </TaskPathItem>
          <TaskPathItem>
            <TaskPathItemLink to="/task/pendents">Tarefas Pendentes</TaskPathItemLink>          
          </TaskPathItem>
        </TaskPath>
        <TaskButton>Criar Nova Tarefa</TaskButton>
        <TaskTable>
          <TaskTableRow>
            <TaskTableColumnName>Status</TaskTableColumnName>
            <TaskTableColumnName>Atribuído</TaskTableColumnName>
            <TaskTableColumnName>Descrição</TaskTableColumnName>
            <TaskTableColumnName>Ações</TaskTableColumnName>
          </TaskTableRow>
          <TaskTableRow>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
          </TaskTableRow>
          <TaskTableRow>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
          </TaskTableRow>
          <TaskTableRow>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
          </TaskTableRow>
          <TaskTableRow>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
            <TaskTableRowValue>Item 1</TaskTableRowValue>
          </TaskTableRow>
        </TaskTable>
        <TaskButton>Criar Nova Tarefa</TaskButton>
      </TaskContainer>
    </Container>
  </>  
);

export default Task;