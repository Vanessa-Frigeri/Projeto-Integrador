import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropdownNav = styled.nav`
  background: var(--purple-50);
  border-radius: .5rem;
  position: absolute;
  top: 60px;
  right: 0;
  width: 15rem;
  box-shadow: 0 1px .5rem rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const Name = styled.span`
  font-size: 1rem;
  color: white;
  margin: 1rem;
`;

export const DropdownButton = styled.button`
  background: transparent;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
  border: none;
  vertical-align: middle;
  transition: box-shadow .5s ease;
  margin-left: auto;

  &:hover {
    background-color: var(--purple-100);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
  }

  &:focus {
    background-color: var(--purple-100);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
  }
`;

export const DropdownNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DropdownNavListItem = styled.li`
  border-radius: 6px;
  border-bottom: 1px solid var(--purple-100);
`;

export const DropdownNavListItemLink= styled.a`
  text-decoration: none;
  color: var(--purple-900);
  padding: 1rem 1.4rem;
  display: block;
`;
