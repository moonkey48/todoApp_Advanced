import React from 'react';
import { Todo } from '../types/todo';
import TodoItem from './todoItem';

type TodoListProps = {
    todos:Todo[];
    deleteTodo:(id:string)=>void;
    updateTodo:(id:string, title:string, content:string)=>void;
    handleLogout: ()=>void;
}
const TodoList = ({
    todos, deleteTodo, updateTodo, handleLogout
}:TodoListProps) => {
    return (
        <section>
            <button onClick={handleLogout}>logout</button>
            <ul>
            {todos.length > 0 ? 
            todos.map((todo:Todo)=>{
                return <TodoItem 
                key={todo.id} 
                todo={todo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
                />
            })
            :
            <li>아직 추가된 항목이 없습니다.</li>
            }
            </ul>
        </section>
    )
}

export default TodoList;