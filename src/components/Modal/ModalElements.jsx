
import styled from "styled-components";
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  display: ${(p) => p.block && p.block};
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44rem;
  //height: 32rem;
  box-shadow: 0 .4rem 1rem rgba(0, 0, 0, 0.2);
  background: transparent;
  color: #FFF;
  z-index: 10;
  border-radius: 1rem;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  z-index: 10;
`;