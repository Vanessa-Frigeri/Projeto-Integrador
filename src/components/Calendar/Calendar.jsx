import React from 'react';
import Header from '../Header';
import Container from '../Container';
import em_construcao from '../../assets/images/em_construcao.jpg';
import {
  Image,
  CalendarContainer
} from './CalendarElements';

const Calendar = () => (
  <>
    <Header />
    <Container>
      <CalendarContainer>
        <Image src={em_construcao} alt="calendario" />
      </CalendarContainer>
    </Container>
  </>
);

export default Calendar;