import React from 'react';
import Container from '../Container';
import { FaSearch, FaPen, FaRegTrashAlt } from 'react-icons/fa';
import {
  ListExpensesContainer,
  ExpensesTable,
  ExpensesTableRow,
  ExpensesTableColumnName,
  ExpensesTableRowValue,
  DivActions
} from './ListExpensesElements';

const ListExpenses = () => (
  <>
    <Container>
      <ListExpensesContainer>
        <ExpensesTable>
            <ExpensesTableRow>
              <ExpensesTableColumnName>Data da Despesa</ExpensesTableColumnName>
              <ExpensesTableColumnName>Descrição</ExpensesTableColumnName>
              <ExpensesTableColumnName>Valor</ExpensesTableColumnName>
              <ExpensesTableColumnName>Categoria</ExpensesTableColumnName>
              <ExpensesTableColumnName>Status</ExpensesTableColumnName>
              <ExpensesTableColumnName>Ações</ExpensesTableColumnName>
            </ExpensesTableRow>
            <ExpensesTableRow>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>
                <DivActions>
                  <FaSearch/>
                  <FaPen/>
                  <FaRegTrashAlt/>
                </DivActions>
              </ExpensesTableRowValue>
            </ExpensesTableRow>
            <ExpensesTableRow>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>
                <DivActions>
                  <FaSearch/>
                  <FaPen/>
                  <FaRegTrashAlt/>
                </DivActions>
              </ExpensesTableRowValue>
            </ExpensesTableRow>
            <ExpensesTableRow>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>
                <DivActions>
                  <FaSearch/>
                  <FaPen/>
                  <FaRegTrashAlt/>
                </DivActions>
              </ExpensesTableRowValue>
            </ExpensesTableRow>
            <ExpensesTableRow>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>Item 1</ExpensesTableRowValue>
              <ExpensesTableRowValue>
                <DivActions>
                  <FaSearch/>
                  <FaPen/>
                  <FaRegTrashAlt/>
                </DivActions>
              </ExpensesTableRowValue>
            </ExpensesTableRow>
          </ExpensesTable>
      </ListExpensesContainer>
    </Container>
  </>
);

export default ListExpenses;