import React from 'react';
import Header from '../Header';
import Container from '../Container';
import {
  MessageContainer,
  MessagePath,
  MessagePathItem,
  MessagePathItemLink
} from './MessageElements';

const Message = () => (
  <>
    <Header/>
    <Container>
      <MessageContainer>
        <MessagePath>
          <MessagePathItem>
            <MessagePathItemLink to="/message">Recados</MessagePathItemLink>          
          </MessagePathItem>
          <MessagePathItem>
            <MessagePathItemLink to="/message/pendents">Não Lidos</MessagePathItemLink>          
          </MessagePathItem>
        </MessagePath>
      </MessageContainer>
    </Container>
  </>  
);

export default Message;