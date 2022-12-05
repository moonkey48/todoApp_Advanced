import React from 'react';
import { Todo } from '../types/todo';

type TodoListProps = {
    todos:Todo[];
    handleLogout: ()=>void;
}
const TodoList = ({todos, handleLogout}:TodoListProps) => {
    return (
        <section>
            <button onClick={handleLogout}>logout</button>
            <ul>
            {todos.length > 0 ? 
            todos.map((todo:Todo)=>{
                return <li key={todo.id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.content}</h2>
                </li>
            })
            :
            <li>아직 추가된 항목이 없습니다.</li>
            }
            </ul>
        </section>
    )
}

export default TodoList;