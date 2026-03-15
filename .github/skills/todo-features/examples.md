# ตัวอย่างโค้ด CRUD

## Create — เพิ่ม Todo

### Server (POST /api/todos)
```javascript
app.post('/api/todos', (req, res) => {
  const { text } = req.body;

  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return res.status(400).json({ error: 'Text is required' });
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
```

### Client (App.js → addTodo)
```javascript
const addTodo = async (text) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  const newTodo = await response.json();
  setTodos([...todos, newTodo]);
};
```

## Read — ดึง Todos ทั้งหมด

```javascript
// App.js — useEffect
useEffect(() => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setTodos(data));
}, []);
```

## Update — แก้ไข / Toggle

### Toggle completed
```javascript
const toggleTodo = async (id) => {
  const todo = todos.find((t) => t.id === id);
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: !todo.completed }),
  });
  const updated = await response.json();
  setTodos(todos.map((t) => (t.id === id ? updated : t)));
};
```

### แก้ไขข้อความ
```javascript
const editTodo = async (id, text) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  const updated = await response.json();
  setTodos(todos.map((t) => (t.id === id ? updated : t)));
};
```

## Delete — ลบ Todo

```javascript
const deleteTodo = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  setTodos(todos.filter((t) => t.id !== id));
};
```
