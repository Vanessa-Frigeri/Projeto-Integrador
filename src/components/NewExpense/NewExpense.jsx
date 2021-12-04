import React from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { 
  NewExpenseContainer,
  NewExpenseForm,
  NewExpenseGroup,
  ExpenseGroupLabel,
  ExpenseGroupInput,
  ExpenseGroupTextArea,
  ExpenseGroupSelect,
  NewExpenseButtonAdd,
  NewExpenseButtonCancel
} from './NewExpenseElements';

const NewExpense = () => (
  <>
    <NewExpenseContainer>
      <NewExpenseForm>      
        <NewExpenseGroup>
          <ExpenseGroupInput type="text"/>
          <ExpenseGroupLabel>Descrição</ExpenseGroupLabel>
        </NewExpenseGroup>
        <NewExpenseGroup>
          <ExpenseGroupInput type="date"/>
          <ExpenseGroupLabel>Data</ExpenseGroupLabel>
        </NewExpenseGroup>
        <NewExpenseGroup>
          <ExpenseGroupInput type="text"/>
          <ExpenseGroupLabel>Valor</ExpenseGroupLabel>
        </NewExpenseGroup>
        <NewExpenseGroup>
          <ExpenseGroupSelect/>
          <ExpenseGroupLabel>Categoria</ExpenseGroupLabel>
        </NewExpenseGroup>
        <NewExpenseGroup>
          <ExpenseGroupTextArea></ExpenseGroupTextArea>
          <ExpenseGroupLabel>Notas</ExpenseGroupLabel>
        </NewExpenseGroup>
        <NewExpenseGroup>
          <ExpenseGroupInput type="file"/>
          <ExpenseGroupLabel>Anexo</ExpenseGroupLabel>
        </NewExpenseGroup>        
        <NewExpenseButtonAdd type="button">
          <FaPlus/>Nova despesa
        </NewExpenseButtonAdd>
        <NewExpenseButtonCancel type="button">
          <FaTimes/>Cancelar
        </NewExpenseButtonCancel>
      </NewExpenseForm>
    </NewExpenseContainer>
  </>
);

export default NewExpense;