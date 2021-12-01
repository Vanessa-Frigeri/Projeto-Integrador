import React from 'react';
import Profile from '../Profile';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return(
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/home" onClick={toggle}>Home</SidebarLink>
          <SidebarLink to="/calendar" onClick={toggle}>Calendário</SidebarLink>
          <SidebarLink to="/task" onClick={toggle}>Tarefas</SidebarLink>
          <SidebarLink to="/finance" onClick={toggle}>Carteira</SidebarLink>
          <SidebarLink to="/profile" onClick={toggle}><Profile/>Profile</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );

}

export default Sidebar;