import styled from "styled-components";

export const ListPaymentsContainer = styled.div`
  width: 100%;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;


export const PaymentsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const PaymentsTableRow = styled.tr`
  padding: .5rem;
  border-right: 1px;
  border-left: 1px;
  border-bottom: 1px;
  border-style: solid;
  border-color: #000;
`;

export const PaymentsTableColumnName = styled.th`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const PaymentsTableRowValue = styled.td`
  padding: .5rem;
`;


export const DivActions = styled.div`
  display:flex;
`;
