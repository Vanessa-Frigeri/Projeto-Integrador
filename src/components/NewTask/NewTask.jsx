import React from 'react';
import { 
  NewTaskContainer,
  NewTaskGroup,
  TaskGroupLabel,
  TaskGroupInput,
  TaskGroupTextArea,
  TaskGroupSelect
} from './NewTaskElements';

const NewTask = () => (
  <>
    <NewTaskContainer>
      <NewTaskGroup>
        <TaskGroupInput type="text"/>
        <TaskGroupLabel>Descrição</TaskGroupLabel>
      </NewTaskGroup>
      <NewTaskGroup>
        <TaskGroupInput type="date"/>
        <TaskGroupLabel>Data</TaskGroupLabel>
      </NewTaskGroup>
      <NewTaskGroup>
        <TaskGroupInput type="text"/>
        <TaskGroupLabel>Atribuido</TaskGroupLabel>
      </NewTaskGroup>
      <NewTaskGroup>
        <TaskGroupTextArea></TaskGroupTextArea>
        <TaskGroupLabel>Notas</TaskGroupLabel>
      </NewTaskGroup>
      <NewTaskGroup>
        <TaskGroupSelect/>
        <TaskGroupLabel>Lista de Tarefas</TaskGroupLabel>
      </NewTaskGroup>
    </NewTaskContainer>
  </>
);

export default NewTask;