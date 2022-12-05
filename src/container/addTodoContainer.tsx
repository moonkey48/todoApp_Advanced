import axios from 'axios';
import React, { Dispatch, SetStateAction, useState } from 'react';
import AddTodo from '../components/addTodo';
import { Todo } from '../types/todo';

type AddTodoContainerType = {
    todos:Todo[]
    setTodos:Dispatch<SetStateAction<Todo[]>>
}
const AddTodoContainer = ({todos, setTodos}:AddTodoContainerType) => {
    const addTodo = (title:string, content:string) =>{
        axios.post('http://localhost:8080/todos',{
            title,
            content
        },{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then(res=>{
            if(res.data){
                setTodos([...todos, res.data.data]);
            }
        })
        .catch(e=>console.log('error on add Todo'))
    }
    return <AddTodo addTodo={addTodo}/>
}

export default AddTodoContainer;