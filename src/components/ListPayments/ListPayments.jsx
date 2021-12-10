import React from 'react';
import Container from '../Container';
import { FaSearch, FaPen, FaRegTrashAlt } from 'react-icons/fa';
import {
  ListPaymentsContainer,
  PaymentsTable,
  PaymentsTableRow,
  PaymentsTableColumnName,
  PaymentsTableRowValue,
  DivActions
} from './ListPaymentsElements';

const ListPayments = () => (
  <>
    <Container>
      <ListPaymentsContainer>
        <PaymentsTable>
          <PaymentsTableRow>
            <PaymentsTableColumnName>Data do Pagamento</PaymentsTableColumnName>
            <PaymentsTableColumnName>Pagador</PaymentsTableColumnName>
            <PaymentsTableColumnName>Descrição</PaymentsTableColumnName>
            <PaymentsTableColumnName>Valor</PaymentsTableColumnName>
            <PaymentsTableColumnName>Status</PaymentsTableColumnName>
            <PaymentsTableColumnName>Ações</PaymentsTableColumnName>
          </PaymentsTableRow>
          <PaymentsTableRow>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>
              <DivActions>
                <FaSearch />
                <FaPen />
                <FaRegTrashAlt />
              </DivActions>
            </PaymentsTableRowValue>
          </PaymentsTableRow>
          <PaymentsTableRow>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>
              <DivActions>
                <FaSearch />
                <FaPen />
                <FaRegTrashAlt />
              </DivActions>
            </PaymentsTableRowValue>
          </PaymentsTableRow>
          <PaymentsTableRow>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>
              <DivActions>
                <FaSearch />
                <FaPen />
                <FaRegTrashAlt />
              </DivActions>
            </PaymentsTableRowValue>
          </PaymentsTableRow>
          <PaymentsTableRow>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>
              <DivActions>
                <FaSearch />
                <FaPen />
                <FaRegTrashAlt />
              </DivActions>
            </PaymentsTableRowValue>
          </PaymentsTableRow>
          <PaymentsTableRow>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>Item 1</PaymentsTableRowValue>
            <PaymentsTableRowValue>
              <DivActions>
                <FaSearch />
                <FaPen />
                <FaRegTrashAlt />
              </DivActions>
            </PaymentsTableRowValue>
          </PaymentsTableRow>
        </PaymentsTable>
      </ListPaymentsContainer>
    </Container>
  </>
);

export default ListPayments;