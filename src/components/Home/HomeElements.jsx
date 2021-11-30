import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 80%;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeGroupList = styled.ul`
  list-style: none;
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`;

export const HomeGroupItem = styled.li`
  box-sizing: border-box;
`;

export const HomeGroupButton = styled.button`
  width: 10rem;
  font-size: 1.2rem;
  padding: .5rem;
  background-color: var(--purple-400);
  border: 1px solid white;
  border-radius: 1rem;
  color: var(--purple-900);
`;