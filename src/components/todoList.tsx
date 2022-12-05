import React from 'react';

type TodoListProps = {
    handleLogout: ()=>void;
}
const TodoList = ({handleLogout}:TodoListProps) => {
    return (
        <section>
            <button onClick={handleLogout}>logout</button>
            <ul>
            <li>todo 1</li>
            <li>todo 2</li>
            <li>todo 3</li>
            <li>todo 4</li>
        </ul>
        </section>
    )
}

export default TodoList;