import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthContainer from './auth/authContainer';
import TodoPage from './pages/todoPage';
import React from 'react';
import TodoItemPage from './pages/todoItemPage';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/'  element={<AuthContainer/>} />
      <Route path='/login' element={<AuthContainer/>} />
      <Route path='/todoPage' element={<TodoPage/>} />
      <Route path='/todoPage/:id' element={<TodoItemPage/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
