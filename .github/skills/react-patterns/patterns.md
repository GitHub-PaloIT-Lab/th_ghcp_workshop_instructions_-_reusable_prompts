# React Patterns — โค้ดตัวอย่าง

## Pattern 1: Controlled Input + Form Submit

```jsx
function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();           // ป้องกัน page reload
    const trimmed = text.trim();
    if (!trimmed) return;         // ไม่ส่งค่าว่าง
    onAdd(trimmed);               // เรียก callback จาก parent
    setText('');                   // เคลียร์ input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">เพิ่ม</button>
    </form>
  );
}
```

**หลักการ**: input `value` ผูกกับ state → React ควบคุมค่าทั้งหมด

## Pattern 2: List Rendering with Key

```jsx
function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}          // ← ใช้ id จริง ไม่ใช้ index
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
```

**หลักการ**: `key` ต้องเป็น unique id ไม่ใช่ array index → React track การเปลี่ยนแปลงได้ถูก

## Pattern 3: Inline Edit Mode

```jsx
function TodoItem({ todo, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, editText.trim());
    setIsEditing(false);
  };

  if (isEditing) {
    return <input value={editText} onChange={(e) => setEditText(e.target.value)} onBlur={handleSave} />;
  }

  return <span onDoubleClick={() => setIsEditing(true)}>{todo.text}</span>;
}
```

**หลักการ**: state `isEditing` อยู่ใน TodoItem (ไม่ต้องส่งขึ้น parent)

## Pattern 4: Callback Props (Parent → Child Communication)

```
App.js                          TodoItem.js
─────────                       ───────────
const deleteTodo = (id) => {    <button onClick={() => onDelete(todo.id)}>
  setTodos(filter...)             ลบ
};                              </button>
                ↓ props
<TodoItem onDelete={deleteTodo} />
```

**หลักการ**: Parent สร้าง function → ส่งเป็น prop → Child เรียกพร้อมส่ง id กลับ

## Pattern 5: useEffect for Data Fetching

```jsx
useEffect(() => {
  const fetchTodos = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTodos(data);
  };
  fetchTodos();
}, []); // ← [] = ทำครั้งเดียวตอน mount
```

**หลักการ**: `[]` dependency = fetch ตอนเปิดแอปครั้งเดียว
