import styled from 'styled-components';

export const NewTaskContainer = styled.div`
  width: 100%;
  height: 40rem;
  border-radius: 1rem;
  display: flex;  
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #e7cbec;
`;

export const NewTaskForm = styled.form`
  margin-top: 1rem;
  margin-bottom:6rem;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const NewTaskButton = styled.button`
border: none;
width: 10rem;
padding: 1rem 0;
border-radius: 1rem;
font-size: 1.2rem;
font-weight: bold;
color: #ffffff;
background-color: #9c27b0;
border: 3px solid #04bcd4;
margin-top: .5rem;

&:hover{ 
  background-color:#04bcd4;
  color: black;
}
`;

export const TaskGroupLabel = styled.label`
  color: var(--indigo-400);
  pointer-events: none;
  position: absolute;
  transform: translate(1rem, .1rem) scale(1.2);
  transform-origin: top left;
  transition: all 0.2s ease-out;
  margin-bottom: 1.5em;

  
`;

export const NewTaskGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  height: 5rem;
  position: relative;
  padding-top: 1.5rem;
  outline: none;
  border: 1px solid var(--indigo-500);
  border-radius: 5px;
  background-color: var(--indigo-50);
  transition: 0.1s ease-out;

  &:focus-within ${TaskGroupLabel} {
    transform: translate(1rem, -1rem) scale(0.90);
  }

  .Active {
    transform: translate(1rem, -1rem) scale(0.90);
  }

  .ActiveTxtArea{
    transform: translate(1rem, -1rem) scale(0.90);
  }
`;

export const TaskGroupInput = styled.input`
  font-size: 1.5rem;
  outline: none;
  border: none;
  color: var(--indigo-700);
  background-color: var(--indigo-50);
  transition: 0.1s ease-out;
  height: 3.0rem;
  margin-left: 12rem;
  margin-right: 0.5rem;
  

`;

export const TaskGroupSelect = styled.select`
  font-size: 1rem;
  outline: none;
  border: none;
  color: var(--indigo-700);
  background-color: var(--indigo-50);
  transition: 0.1s ease-out;
  height: 2.5rem;
  margin-left: .5rem;
  margin-right: .5rem;
`;

export const TaskGroupTextArea = styled.textarea`
  font-size: 1rem;
  outline: none;
  border: none;
  color: var(--indigo-700);
  background-color: var(--indigo-50);
  transition: 0.1s ease-out;
  height: 2.5rem;
  margin-left: .5rem;
  margin-right: .5rem;
`;