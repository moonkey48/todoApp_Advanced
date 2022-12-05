import React from 'react';
import { useNavigate } from 'react-router';
import TodoList from '../components/todoList';

const TodoPage = () => {
    const navigate = useNavigate();
    const onLogout = () =>{
        navigate('/');
        localStorage.removeItem('token');
    }
    return (
        <>
        <TodoList
        handleLogout={onLogout}
        />
        </>
    )
}

export default TodoPage;