import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 100%;
`;

export const ProfileImage = styled.img`
  width: 3rem;
  border-radius: 50%;
`;

export const ProfileText = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`;

export const ProfileRadio = styled.input`
  
`;

export const RadioLink = styled(LinkR)`
  text-decoration: none;
  color: white;

  &:hover{
    color: white;
  }
`;

export const RadioGroupList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-around;

  &::after{
    content: "";
    clear: both;
  }
`;

export const RadioGroupItem = styled.li`
  box-sizing: border-box;
  float: left;
  position:relative;
  width: 8rem;
`;

export const RadioLabel = styled.label`
  width: 100%;
  font-size: 1rem;
  position:absolute;
  left: 0;
  background: var(--purple-500);
`;