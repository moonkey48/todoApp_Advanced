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
    const deleteTodo = (id:string) => {
        axios.delete(`http://localhost:8080/todos/${id}`,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then(res=>{
            setTodos(todos=>todos.filter(todo=>todo.id!==id));
        })
        .catch(e=>console.log('error on delete item'));
    }
    const updateTodo = (id:string, title:string, content:string) => {
        axios.put(`http://localhost:8080/todos/${id}`,{
            title,
            content
        },{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then(res=>{
            const todoRes = res.data.data
            if(todoRes){
                setTodos(todos=>todos.map(todo=>todo.id===id?todoRes:todo));
            }
        })
        .catch(e=>console.log('error on update item'));
    }

    useEffect(()=>{
        getTodos();
    },[]);
    return <TodoList 
    todos={todos}
    deleteTodo={deleteTodo}
    updateTodo={updateTodo}
    handleLogout={handleLogout}
    />
}

export default TodoListContainer;