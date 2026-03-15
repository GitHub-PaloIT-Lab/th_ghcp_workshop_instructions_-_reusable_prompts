import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggle, onEdit, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleSave = () => {
        const trimmed = editText.trim();
        if (!trimmed) return;

        onEdit(todo.id, trimmed);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditText(todo.text);
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSave();
        if (e.key === 'Escape') handleCancel();
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                className="todo-checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />

            {isEditing ? (
                <input
                    type="text"
                    className="edit-input"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={handleSave}
                    autoFocus
                    maxLength={200}
                />
            ) : (
                <span
                    className="todo-text"
                    onDoubleClick={() => setIsEditing(true)}
                >
                    {todo.text}
                </span>
            )}

            <div className="todo-actions">
                {!isEditing && (
                    <button className="btn-edit" onClick={() => setIsEditing(true)}>
                        แก้ไข
                    </button>
                )}
                <button className="btn-delete" onClick={() => onDelete(todo.id)}>
                    ลบ
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
