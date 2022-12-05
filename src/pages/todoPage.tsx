import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import AddTodoContainer from '../container/addTodoContainer';
import TodoListContainer from '../container/todoListContainer';
import { Todo } from '../types/todo';

const TodoPage = () => {
    const navigate = useNavigate();
    const [todos, setTodos] = useState<Todo[]>([]);
    const onLogout = () =>{
        navigate('/');
        localStorage.removeItem('token');
    }
    
    return (
        <>
        <TodoListContainer
        todos={todos}
        setTodos={setTodos}
        handleLogout={onLogout}
        />
        <AddTodoContainer
        todos={todos}
        setTodos={setTodos}
        />
        </>
    )
}

export default TodoPage;