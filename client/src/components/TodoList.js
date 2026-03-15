import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, onToggle, onEdit, onDelete }) {
    if (todos.length === 0) {
        return <p className="empty-message">ยังไม่มีรายการ — เพิ่มสิ่งที่ต้องทำกันเถอะ!</p>;
    }

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default TodoList;
