import React, { useState } from 'react';
import { FaBars, FaAngleLeft ,FaAngleRight } from 'react-icons/fa';
import Profile from '../Profile';
import Modal from '../Modal';
import Login from '../Login';
import Signup from '../Signup';
import {
  NavbarContainer, 
  Nav, 
  NavLink, 
  NavMenu, 
  MobileIcon, 
  NavLogo, 
  NavProfile,
  NavItem,
  NavGroupList,
  NavGroupItem,
  NavGroupButton
} from './NavbarElements';

const Navbar = ({toggle}) => {
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
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"><FaAngleLeft/>Conectados<FaAngleRight/></NavLogo>
          <NavGroupList>
            <NavGroupItem>
                <NavGroupButton type="button" onClick={openModalLogin}>Entrar</NavGroupButton>   
            </NavGroupItem>              
            <NavGroupItem>                
                <NavGroupButton type="button" onClick={openModalSignup}>Nova Conta</NavGroupButton>  
            </NavGroupItem>
          </NavGroupList> 
          <NavProfile>
            <Profile/>
          </NavProfile>            
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="/home" >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/calendar" >
                Calendário
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/task" >
                Tarefas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/finance" >
                Carteira
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/message" >
                Recados
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/settings" >
                Configurações
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
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
    </>
  );
};

export default Navbar;
