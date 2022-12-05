import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Todo } from '../types/todo';

type TodoItemProps = {
    todo:Todo;
    deleteTodo:(id:string)=>void;
    updateTodo:(id:string, title:string, content:string) => void;
}
const TodoItem = ({todo,deleteTodo, updateTodo}:TodoItemProps) => {
    const [onEdit, setOnEdit] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(todo.title);
    const [content, setContent] = useState<string>(todo.content)
    const handleUpdate = () => {
        updateTodo(todo.id, title, content);
        setOnEdit(false)
    };
    const cancelUpdate = () => {
        setTitle(todo.title);
        setContent(todo.content);
        setOnEdit(false)
    }
    return (
        <li key={todo.id}>
        {
        onEdit ? 
            <form onSubmit={(e)=>e.preventDefault()}>
                <input type="text" value={title} 
                onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                    setTitle(e.target.value);
                }}
                />
                <input type="text" value={content} 
                onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                    setContent(e.target.value);
                }}
                />
                <button type='button' onClick={cancelUpdate}>cancel</button>
                <button type='button' onClick={handleUpdate}>update</button>
            </form>
        :
            <>
                <h1>{title}</h1>
                <p>{content}</p>
                <button 
                style={{color:'red',background:'none',border:'none',cursor:'pointer'}}
                onClick={()=>deleteTodo(todo.id)}
                >delete</button>
                <button
                style={{color:'blue',background:'none',border:'none',cursor:'pointer'}}
                onClick={()=>setOnEdit(true)}
                >edit</button>
            </>
        }
        </li>
    )
}

export default TodoItem;