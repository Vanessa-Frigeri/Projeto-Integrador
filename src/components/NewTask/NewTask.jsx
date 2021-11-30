import React from 'react';
import { 
  NewTaskContainer,
  NewTaskForm,
  NewTaskGroup,
  TaskGroupLabel,
  TaskGroupInput,
  TaskGroupTextArea,
  TaskGroupSelect,
  NewTaskButton
} from './NewTaskElements';

const NewTask = () => (
  <>
    <NewTaskContainer>
      <NewTaskForm>      
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
        <NewTaskButton type="button">Nova tarefa</NewTaskButton>
      </NewTaskForm>
    </NewTaskContainer>
  </>
);

export default NewTask;