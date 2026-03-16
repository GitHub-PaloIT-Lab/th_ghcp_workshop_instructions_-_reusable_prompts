import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:8000/api/todos';

function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // โหลด todos จาก API ตอนเปิดแอป
    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setTodos(data);
            setError(null);
        } catch (err) {
            setError('ไม่สามารถเชื่อมต่อ server ได้');
        } finally {
            setLoading(false);
        }
    };

    // เพิ่ม todo ใหม่
    const addTodo = async (text) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text }),
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.error);
            }

            const newTodo = await response.json();
            setTodos([...todos, newTodo]);
        } catch (err) {
            setError(err.message);
        }
    };

    // toggle สถานะ completed
    const toggleTodo = async (id) => {
        const todo = todos.find((t) => t.id === id);
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: !todo.completed }),
            });

            if (!response.ok) throw new Error('Update failed');

            const updated = await response.json();
            setTodos(todos.map((t) => (t.id === id ? updated : t)));
        } catch (err) {
            setError(err.message);
        }
    };

    // แก้ไขข้อความ todo
    const editTodo = async (id, text) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text }),
            });

            if (!response.ok) throw new Error('Update failed');

            const updated = await response.json();
            setTodos(todos.map((t) => (t.id === id ? updated : t)));
        } catch (err) {
            setError(err.message);
        }
    };

    // ลบ todo
    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) throw new Error('Delete failed');

            setTodos(todos.filter((t) => t.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div className="app"><p>กำลังโหลด...</p></div>;

    return (
        <div className="app">
            <h1>Todo App</h1>

            {error && <p className="error">{error}</p>}

        </div>
    );
}

export default App;
