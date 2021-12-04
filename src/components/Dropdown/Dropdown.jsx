import React, { useRef } from 'react';
import { useDetectOutsideClick } from './useDetectOutsideClick';
import {
  DropdownContainer,
  DropdownNav,
  DropdownNavList,
  DropdownNavListItem,
  DropdownNavListItemLink,
  DropdownButton,
  Name
} from './DropdownElements';
import Profile from '../Profile';

const Dropdown = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <>
      <div className="container">
        <DropdownContainer>
          <DropdownButton onClick={onClick} >
            <Name>Quem</Name>
            <Profile/>
          </DropdownButton>
          <DropdownNav
            ref={dropdownRef}
            className={`${isActive ? "active" : "inactive"}`}
          >
            <DropdownNavList>
              <DropdownNavListItem>
                <DropdownNavListItemLink href="#">Perfil</DropdownNavListItemLink>
              </DropdownNavListItem>
              <DropdownNavListItem>
                <DropdownNavListItemLink href="#">Família</DropdownNavListItemLink>
              </DropdownNavListItem>
              <DropdownNavListItem>
                <DropdownNavListItemLink href="#">Sair</DropdownNavListItemLink>
              </DropdownNavListItem>
            </DropdownNavList>
          </DropdownNav>
        </DropdownContainer>
      </div>
    </>
  );
};

export default Dropdown;