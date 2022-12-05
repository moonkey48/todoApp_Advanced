import axios from 'axios';
import React from 'react';
import TodoList from '../components/todoList';

type TodoListContainerProps = {
    handleLogout:()=>void;
}
const TodoListContainer = ({handleLogout}:TodoListContainerProps) => {
    const getTodos = () => {
        axios.get('http://localhost:8080/todos',{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then(res=>console.log(res.data))
        .catch(e=>console.log('error on getTodo data'))
    }
    return <TodoList handleLogout={handleLogout}/>
}

export default TodoListContainer;