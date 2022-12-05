import axios from 'axios';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import TodoList from '../components/todoList';
import { Todo } from '../types/todo';

type TodoListContainerProps = {
    handleLogout:()=>void;
    setTodos:Dispatch<SetStateAction<Todo[]>>
    todos:Todo[]
}
const TodoListContainer = ({
    todos,
    setTodos,
    handleLogout
}:TodoListContainerProps) => {
    const getTodos = () => {
        axios.get('http://localhost:8080/todos',{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then(res=>{
            const todoRes = res.data.data
            if(todoRes){
                setTodos(todoRes);
            }
        })
        .catch(e=>console.log('error on getTodo data'))
    }

    useEffect(()=>{
        getTodos();
    },[]);
    return <TodoList 
    todos={todos}
    handleLogout={handleLogout}
    />
}

export default TodoListContainer;