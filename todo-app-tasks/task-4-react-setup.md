# Task 4: React Setup (App.js)

## เป้าหมาย
ตั้งค่า React App หลัก — state management + API calls

## สิ่งที่ต้องทำ

### 1. แก้ไข App.js
```
App.js ต้องมี:
- State: todos (array), loading (boolean), error (string/null)
- useEffect: fetch todos ตอนเปิดแอป
- Handler functions:
  - fetchTodos() — GET /api/todos
  - addTodo(text) — POST /api/todos
  - toggleTodo(id) — PUT /api/todos/:id { completed: !current }
  - editTodo(id, text) — PUT /api/todos/:id { text }
  - deleteTodo(id) — DELETE /api/todos/:id
- Render: TodoForm + TodoList (ยังเป็น placeholder ก่อน)
```

### 2. API URL
```javascript
const API_URL = 'http://localhost:8000/api/todos';
```

### 3. Pattern สำคัญ
```javascript
// fetch + update state
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

## ทดสอบ
1. รัน server (port 8000) + client (port 3000)
2. เปิด browser → ไม่ error
3. เปิด DevTools Network → ดูว่ามี request ไป /api/todos

## Copilot Prompt ที่ใช้ได้
- `/implement-ui`
