import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const SignupContainer = styled.div`
  width: 100%;
  height: 35rem;
  border-radius: 1rem;
  display: flex;  
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: lightgreen;
`;

export const SignupForm = styled.form`
  margin-top: 2rem;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const SignupLink =  styled(LinkR)`
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border: none;
  width: 30%;
  padding: .5rem 0;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: green;
  background-color: white;
`;

export const SignupLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  color: var(--indigo-50);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;  
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const SignupLabel = styled.label`
  color: var(--indigo-400);
  pointer-events: none;
  position: absolute;
  transform: translate(1rem, .1rem) scale(1.2);
  transform-origin: top left;
  transition: all 0.2s ease-out;
`;

export const SignupGroup = styled.div`
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

  &:focus-within ${SignupLabel} {
    transform: translate(1rem, -1rem) scale(0.90);
  }

  .Active {
    transform: translate(1rem, -1rem) scale(0.90);
  }

  .ActiveTxtArea{
    transform: translate(1rem, -1rem) scale(0.90);
  }
`;

export const SignupInput = styled.input`
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
