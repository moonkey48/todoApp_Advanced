import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TodoItem from '../components/todoItem';
import { Todo } from '../types/todo';

const TodoItemPage = () => {
    const [todo, setTodo] = useState<Todo>();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=>{
        console.log(searchParams);    
    },[]);
    return <h1>todoItem</h1>
}

export default TodoItemPage;