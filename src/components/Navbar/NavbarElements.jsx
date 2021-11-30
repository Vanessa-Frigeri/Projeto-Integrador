import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: var(--purple-500);
  height: 8rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
  position: sticky;
  top: 0;

  @media screen and (max-width: 960px){
    transition: .8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 8rem;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
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

export const NavProfile = styled.div`
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: var(--indigo-50);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid var(--cyan-500);
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: var(--indigo-50);

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }  
`;

export const NavMenu = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 3rem;
`;

