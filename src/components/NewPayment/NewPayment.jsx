import React from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { 
  NewPaymentContainer,
  NewPaymentForm,
  NewPaymentGroup,
  PaymentGroupLabel,
  PaymentGroupInput,
  PaymentGroupTextArea,
  NewPaymentButtonAdd,
  NewPaymentButtonCancel
} from './NewPaymentElements';

const NewPayment = () => (
  <>
    <NewPaymentContainer>
      <NewPaymentForm>      
        <NewPaymentGroup>
          <PaymentGroupInput type="text"/>
          <PaymentGroupLabel>Descrição</PaymentGroupLabel>
        </NewPaymentGroup>
        <NewPaymentGroup>
          <PaymentGroupInput type="date"/>
          <PaymentGroupLabel>Data</PaymentGroupLabel>
        </NewPaymentGroup>
        <NewPaymentGroup>
          <PaymentGroupInput type="text"/>
          <PaymentGroupLabel>Valor</PaymentGroupLabel>
        </NewPaymentGroup>
        <NewPaymentGroup>
          <PaymentGroupTextArea></PaymentGroupTextArea>
          <PaymentGroupLabel>Notas</PaymentGroupLabel>
        </NewPaymentGroup>
        <NewPaymentGroup>
          <PaymentGroupInput type="file"/>
          <PaymentGroupLabel>Anexo</PaymentGroupLabel>
        </NewPaymentGroup>     
        <NewPaymentButtonAdd type="button">
          <FaPlus/>Novo pagamento
        </NewPaymentButtonAdd>
        <NewPaymentButtonCancel type="button">
          <FaTimes/>Cancelar
        </NewPaymentButtonCancel>
      </NewPaymentForm>
    </NewPaymentContainer>
  </>
);

export default NewPayment;