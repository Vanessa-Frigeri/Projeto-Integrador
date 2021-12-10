import styled from 'styled-components';

export const NewExpenseContainer = styled.div`
  width: 100%;
  height: 40rem;
  border-radius: 1rem;
  display: flex;  
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #e7cbec;
`;

export const NewExpenseForm = styled.form`
  margin-top: 2rem;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const NewExpenseButtonAdd = styled.button`
  border: none;
  width: 30%;
  padding: .5rem 0;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: green;
  background-color: white;
`;

export const NewExpenseButtonCancel = styled.button`
  border: none;
  width: 30%;
  padding: .5rem 0;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: red;
  background-color: white;
`;

export const ExpenseGroupLabel = styled.label`
  color: var(--indigo-400);
  pointer-events: none;
  position: absolute;
  transform: translate(1rem, .1rem) scale(1.2);
  transform-origin: top left;
  transition: all 0.2s ease-out;
`;

export const NewExpenseGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 5rem;
  position: relative;
  padding-top: 1rem;
  outline: none;
  border: 1px solid var(--indigo-500);
  border-radius: 5px;
  background-color: var(--indigo-50);
  transition: 0.1s ease-out;

  &:focus-within ${ExpenseGroupLabel} {
    transform: translate(1rem, -1rem) scale(0.90);
  }

  .Active {
    transform: translate(1rem, -1rem) scale(0.90);
  }

  .ActiveTxtArea{
    transform: translate(1rem, -1rem) scale(0.90);
  }
`;

export const ExpenseGroupInput = styled.input`
  font-size: 1rem;
  outline: none;
  border: none;
  color: var(--indigo-700);
  background-color: var(--indigo-50);
  transition: 0.1s ease-out;
  height: 2.5rem;
  margin-left: .5rem;
  margin-right: .5rem;
`;

export const ExpenseGroupSelect = styled.select`
  font-size: 1rem;
  outline: none;
  border: none;
  color: var(--indigo-700);
  background-color: var(--indigo-50);
  transition: 0.1s ease-out;
  height: 2.5rem;
  margin-left: .5rem;
  margin-right: .5rem;
`;

export const ExpenseGroupTextArea = styled.textarea`
  font-size: 1rem;
  outline: none;
  border: none;
  color: var(--indigo-700);
  background-color: var(--indigo-50);
  transition: 0.1s ease-out;
  height: 2.5rem;
  margin-left: .5rem;
  margin-right: .5rem;
`;