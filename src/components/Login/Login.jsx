import React from 'react';
import { FaAngleLeft ,FaAngleRight } from 'react-icons/fa';
import {
  LoginContainer,
  LoginForm,
  LoginLogo,
  LoginGroup,
  LoginInput,
  LoginLabel,
  LoginGroupKeep,
  LoginCheck,
  LoginForgot,
  LoginCheckLabel,
  LoginLink,
  LoginNewAccount
} from './LoginElements';

const Login = () => (
  <>
      <LoginContainer>
        <LoginLogo to="/"><FaAngleLeft/>Conectados<FaAngleRight/></LoginLogo>
        <LoginForm>      
          <LoginGroup>
            <LoginInput type="email"/>
            <LoginLabel>Usuário/Email</LoginLabel>
          </LoginGroup>
          <LoginGroup>
            <LoginInput type="password"/>
            <LoginLabel>Senha</LoginLabel>
          </LoginGroup>
          <LoginLink to="/home"> Conectar </LoginLink>
          <LoginGroupKeep className="p-d-flex p-flex-row p-jc-around">
            <div>
              <LoginCheck type="checkbox"/>
              <LoginCheckLabel>Manter conectado</LoginCheckLabel>
            </div>
            <LoginForgot to="/login">Esqueceu a senha?</LoginForgot>
          </LoginGroupKeep>
          <LoginNewAccount to="/signup">Criar uma nova conta</LoginNewAccount>        
        </LoginForm>
      </LoginContainer>
  </>
);

export default Login;