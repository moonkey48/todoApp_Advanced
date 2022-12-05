import axios from 'axios';
import React from 'react';
import AddTodo from '../components/addTodo';

const AddTodoContainer = () => {
    const addTodo = (title:string, content:string) =>{
        axios.post('http://localhost:8080/todos',{
            title,
            content
        },{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then(res=>console.log(res.data))
        .catch(e=>console.log('error on add Todo'))
    }
    return <AddTodo/>
}

export default AddTodoContainer;