import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/index.css';
import './assets/App.css';
import Principal from './components/Principal';
import Home from './components/Home';
import Calendar from './components/Calendar';
import Task from './components/Task';
import Finance from './components/Finance';
import Login from './components/Login';
import Signup from './components/Signup';
import ListPayments from './components/ListPayments';
import ListExpenses from './components/ListExpenses';

const Main = () => (
  <>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/home" element={<Principal/>} />
      <Route exact path="/calendar" element={<Calendar/>} />
      <Route path="/task" element={<Task/>} />
      <Route path="/finance" element={<Finance/>} /> 
      <Route path="/login" element={<Login/>} /> 
      <Route path="/signup" element={<Signup/>} />
      <Route path="/finance/listPayments" element={<ListPayments/>} />   
      <Route path="/finance/listExpenses" element={<ListExpenses/>} />   
    </Routes>
  </>
);

export default Main;
