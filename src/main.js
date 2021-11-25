import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/index.css';
import './assets/App.css';
import Home from './components/Home';
import Calendar from './components/Calendar';
import Task from './components/Task';
import Finance from './components/Finance';
import Message from './components/Message';
import Settings from './components/Settings';
import Login from './components/Login';
import Signup from './components/Signup';
const Main = () => (
  <>
    <Routes>
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/calendar" element={<Calendar/>} />
      <Route path="/task" element={<Task/>} />
      <Route path="/finance" element={<Finance/>} />
      <Route path="/message" element={<Message/>} />
      <Route path="/settings" element={<Settings/>} />  
      <Route path="/login" element={<Login/>} /> 
      <Route path="/signup" element={<Signup/>} />     
    </Routes>
  </>
);

export default Main;
