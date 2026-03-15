const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// --- Middleware ---
app.use(helmet());
app.use(morgan('dev'));
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());

// --- In-memory Data Store ---
let todos = [];
let nextId = 1;

// --- Health Check ---
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// --- CRUD Endpoints ---

// GET /api/todos — ดึง todo ทั้งหมด
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// POST /api/todos — สร้าง todo ใหม่
app.post('/api/todos', (req, res) => {
    const { text } = req.body;

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
        return res.status(400).json({ error: 'Text is required' });
    }

    if (text.length > 200) {
        return res.status(400).json({ error: 'Text must be 200 characters or less' });
    }

    const todo = {
        id: nextId++,
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
    };

    todos.push(todo);
    res.status(201).json(todo);
});

// PUT /api/todos/:id — อัปเดต todo
app.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const todo = todos.find((t) => t.id === id);

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    const { text, completed } = req.body;

    if (text !== undefined) {
        if (typeof text !== 'string' || text.trim().length === 0) {
            return res.status(400).json({ error: 'Text must be a non-empty string' });
        }
        if (text.length > 200) {
            return res.status(400).json({ error: 'Text must be 200 characters or less' });
        }
        todo.text = text.trim();
    }

    if (completed !== undefined) {
        if (typeof completed !== 'boolean') {
            return res.status(400).json({ error: 'Completed must be a boolean' });
        }
        todo.completed = completed;
    }

    res.json(todo);
});

// DELETE /api/todos/:id — ลบ todo
app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = todos.findIndex((t) => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    const deleted = todos.splice(index, 1)[0];
    res.json(deleted);
});

// --- Start Server ---
app.listen(PORT, () => {
    console.log(`Todo API server running on http://localhost:${PORT}`);
});
