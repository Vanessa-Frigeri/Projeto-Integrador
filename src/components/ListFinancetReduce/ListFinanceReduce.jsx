import React from 'react';
import {
  FinanceReduceList,
  FinanceReduceListItem,
  ItemOutuputValue,
  ItemOutuputDescription,
  ItemOutuputDate,
  ItemOutuputStatus
} from './ListFinanceReduceElements';

const ListFinanceReduce = () => (
  <>
    <FinanceReduceList>
      <FinanceReduceListItem>
        <ItemOutuputValue>R$ 50,00</ItemOutuputValue>
        <ItemOutuputStatus>Pendente</ItemOutuputStatus>
        <ItemOutuputDescription>Pagamento da Escola</ItemOutuputDescription>
        <ItemOutuputDate>15/08/2021</ItemOutuputDate>        
      </FinanceReduceListItem>
      <FinanceReduceListItem>
        <ItemOutuputValue>R$ 50,00</ItemOutuputValue>
        <ItemOutuputStatus>Pendente</ItemOutuputStatus>
        <ItemOutuputDescription>Pagamento da Escola</ItemOutuputDescription>
        <ItemOutuputDate>15/08/2021</ItemOutuputDate>
      </FinanceReduceListItem>
      <FinanceReduceListItem>
        <ItemOutuputValue>R$ 50,00</ItemOutuputValue>
        <ItemOutuputStatus>Pendente</ItemOutuputStatus>
        <ItemOutuputDescription>Pagamento da Escola</ItemOutuputDescription>
        <ItemOutuputDate>15/08/2021</ItemOutuputDate>
      </FinanceReduceListItem>
      <FinanceReduceListItem>
        <ItemOutuputValue>R$ 50,00</ItemOutuputValue>
        <ItemOutuputStatus>Pendente</ItemOutuputStatus>
        <ItemOutuputDescription>Pagamento da Escola</ItemOutuputDescription>
        <ItemOutuputDate>15/08/2021</ItemOutuputDate>
      </FinanceReduceListItem>
    </FinanceReduceList>
  </>
);

export default ListFinanceReduce;