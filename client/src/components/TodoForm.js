import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) return;

        onAdd(trimmed);
        setText('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="เพิ่มสิ่งที่ต้องทำ..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={200}
            />
            <button type="submit" className="btn-add">เพิ่ม</button>
        </form>
    );
}

export default TodoForm;
