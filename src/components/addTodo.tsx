import React, { FormEvent, useState } from 'react';

type AddTodoProps = {
    addTodo:(title:string, content:string)=>void;
}
const AddTodo = ({addTodo}:AddTodoProps) => {
    const [title,setTitle] = useState('');
    const [content, setContent] = useState('')
    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault();
        if(title!=='' && content !== ''){
            addTodo(title, content);
            setTitle('')
            setContent('')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>title</h3>
            <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
            <h3>content</h3>
            <input type="text" onChange={(e)=>setContent(e.target.value)}/>
            <button type='submit'>add todo</button>
        </form>
    )
}

export default AddTodo;