import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const LoginContainer = styled.div`
  width: 100%;
  height: 35rem;
  border-radius: 1rem;
  display: flex;  
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: lightgreen;
`;

export const LoginForm = styled.form`
  margin-top: 2rem;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const LoginLink = styled(LinkR)`
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

export const LoginLogo = styled(LinkR)`
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

export const LoginLabel = styled.label`
  color: var(--indigo-400);
  pointer-events: none;
  position: absolute;
  transform: translate(1rem, .1rem) scale(1.2);
  transform-origin: top left;
  transition: all 0.2s ease-out;
`;

export const LoginGroup = styled.div`
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

  &:focus-within ${LoginLabel} {
    transform: translate(1rem, -1rem) scale(0.90);
  }

  .Active {
    transform: translate(1rem, -1rem) scale(0.90);
  }

  .ActiveTxtArea{
    transform: translate(1rem, -1rem) scale(0.90);
  }
`;

export const LoginGroupKeep = styled(LoginGroup)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;
  background-color: transparent;
`;

export const LoginInput = styled.input`
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

export const LoginCheck = styled.input`
  font-size: 2rem;
`;

export const LoginForgot = styled(LinkR)`
  font-size: 1.2rem;  
  margin-left: 24px;
  color: green;
  text-decoration: none;
`;

export const LoginCheckLabel = styled.label`
  font-size: 1.2rem;
  margin-left: .5rem;
  color: green;
`;

export const LoginNewAccount = styled(LinkR)`
  font-size: 1.5rem; 
  text-decoration: none;
  color: darkgreen;
`;