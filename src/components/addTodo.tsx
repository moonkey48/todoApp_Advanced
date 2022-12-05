import React, { FormEvent, useRef, useState } from 'react';

type AddTodoProps = {
    addTodo:(title:string, content:string)=>void;
}
const AddTodo = ({addTodo}:AddTodoProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [title,setTitle] = useState('');
    const [content, setContent] = useState('')
    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault();
        if(title!=='' && content !== ''){
            addTodo(title, content);
        }
        setTitle('')
        setContent('')
        formRef.current?.reset();
    }
    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <h3>title</h3>
            <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
            <h3>content</h3>
            <input type="text" onChange={(e)=>setContent(e.target.value)}/>
            <button type='submit'>add todo</button>
        </form>
    )
}

export default AddTodo;