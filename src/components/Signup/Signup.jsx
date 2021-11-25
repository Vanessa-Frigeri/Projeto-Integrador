import React from 'react';
import { FaAngleLeft ,FaAngleRight } from 'react-icons/fa';
import {
  SignupContainer,
  SignupForm,
  SignupLogo,
  SignupGroup,
  SignupInput,
  SignupLabel,
  SignupButton,
} from './SignupElements';

const Signup = () => (
  <>
      <SignupContainer>
        <SignupLogo to="/"><FaAngleLeft/>Conectados<FaAngleRight/></SignupLogo>
        <SignupForm>  
          <SignupGroup>
            <SignupInput type="text"/>
            <SignupLabel>Nome Completo</SignupLabel>
          </SignupGroup>    
          <SignupGroup>
            <SignupInput type="email"/>
            <SignupLabel>Email</SignupLabel>
          </SignupGroup>
          <SignupGroup>
            <SignupInput type="password"/>
            <SignupLabel>Senha</SignupLabel>
          </SignupGroup>
          <SignupGroup>
            <SignupInput type="password"/>
            <SignupLabel>Confirme a Senha</SignupLabel>
          </SignupGroup>
          <SignupButton>Criar conta</SignupButton>      
        </SignupForm>
      </SignupContainer>  
  </>
);

export default Signup;