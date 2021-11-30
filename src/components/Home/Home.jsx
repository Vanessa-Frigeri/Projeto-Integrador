import React, { useState } from 'react';
import Header from '../Header';
import Container from '../Container';
import Modal from '../Modal';
import Login from '../Login';
import Signup from '../Signup';
import {
  HomeContainer,
  HomeGroupList,
  HomeGroupItem,
  HomeGroupButton
} from './HomeElements';

const Home = () => {

  const [showModalLogin, setShowModalLogin] = useState(false);

  const openModalLogin = () => {
    setShowModalLogin((prev) => !prev);
  };

  const [showModalSignup, setShowModalSignup] = useState(false);

  const openModalSignup = () => {
    setShowModalSignup((prev) => !prev);
  };

  return (
    <>
      <Header/>
      <Container>
        <HomeContainer>
          <HomeGroupList>
              <HomeGroupItem>
                  <HomeGroupButton type="button" onClick={openModalLogin}>Entrar</HomeGroupButton>   
              </HomeGroupItem>              
              <HomeGroupItem>                
                  <HomeGroupButton type="button" onClick={openModalSignup}>Nova Conta</HomeGroupButton>  
              </HomeGroupItem>
          </HomeGroupList> 
        </HomeContainer>
        <Modal
          showModal={showModalLogin}
          setShowModal={setShowModalLogin}
        >
          <Login />
        </Modal>
        <Modal
          showModal={showModalSignup}
          setShowModal={setShowModalSignup}
        >
          <Signup />
        </Modal>      
      </Container>
    </>
  );
};

export default Home;