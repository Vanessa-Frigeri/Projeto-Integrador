import React from 'react';
import { FaBars, FaAngleLeft ,FaAngleRight } from 'react-icons/fa';
import Profile from '../Profile';
import {
  NavbarContainer, 
  Nav, 
  NavLink, 
  NavMenu, 
  MobileIcon, 
  NavLogo, 
  NavProfile,
  NavItem,
} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"><FaAngleLeft/>Conectados<FaAngleRight/></NavLogo>
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
    </>
  );
};

export default Navbar;
