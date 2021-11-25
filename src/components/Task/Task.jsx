import React, {useState} from 'react';
import Header from '../Header';
import Container from '../Container';
import Modal from '../Modal';
import NewTask from '../NewTask';

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



const Task = () => {
  const [showModalNewTask, setShowModalNewTask] = useState(false);

  const openModalNewTask = () => {
    setShowModalNewTask((prev) => !prev);
  };

  return (
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
        <TaskButton type="button" onClick={openModalNewTask}>Nova Tarefa</TaskButton>
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
        <TaskButton type="button" onClick={openModalNewTask}>Nova Tarefa</TaskButton>
      </TaskContainer>
      <Modal
        showModal={showModalNewTask}
        setShowModal={setShowModalNewTask}
      >
        <NewTask />
      </Modal>
    </Container>
  </>  
  );
};

export default Task;