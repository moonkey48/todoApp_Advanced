import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import AddTodoContainer from '../container/addTodoContainer';
import TodoListContainer from '../container/todoListContainer';
import { Todo } from '../types/todo';

const TodoPage = () => {
    const navigate = useNavigate();
    const onLogout = () =>{
        navigate('/');
        localStorage.removeItem('token');
    }
    
    return (
        <>
        <TodoListContainer
        handleLogout={onLogout}
        />
        <AddTodoContainer/>
        </>
    )
}

export default TodoPage;