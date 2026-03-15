# Task 6: TodoList + TodoItem Components

## เป้าหมาย
สร้าง components แสดงรายการ todo พร้อม toggle/edit/delete

## TodoList Component

### Props
- `todos` — array ของ todo objects
- `onToggle(id)` — toggle completed
- `onEdit(id, text)` — แก้ไขข้อความ
- `onDelete(id)` — ลบ todo

### พฤติกรรม
- วน `todos.map()` แสดง `TodoItem` แต่ละตัว
- ใส่ `key={todo.id}`
- แสดงข้อความเมื่อ list ว่าง

---

## TodoItem Component

### Props
- `todo` — todo object ตัวเดียว
- `onToggle`, `onEdit`, `onDelete` — callback functions

### Local State
- `isEditing` — boolean (กำลังแก้ไขหรือไม่)
- `editText` — ข้อความที่กำลังแก้

### พฤติกรรม
1. **Checkbox**: คลิก → เรียก `onToggle(todo.id)`
2. **แสดงข้อความ**: ถ้า completed → มี line-through
3. **Double-click**: เข้า edit mode
4. **Edit mode**: แสดง input แทน text
   - Enter → save
   - Escape → cancel
   - Blur → save
5. **ปุ่มลบ**: คลิก → เรียก `onDelete(todo.id)`

### JSX Structure (Normal Mode)
```jsx
<li className="todo-item">
  <input type="checkbox" checked={todo.completed} onChange={...} />
  <span className="todo-text">{todo.text}</span>
  <button className="btn-edit">แก้ไข</button>
  <button className="btn-delete">ลบ</button>
</li>
```

### JSX Structure (Edit Mode)
```jsx
<li className="todo-item">
  <input type="checkbox" ... />
  <input type="text" className="edit-input" value={editText} ... />
  <button className="btn-delete">ลบ</button>
</li>
```

## CSS
- `TodoList.css`: list-style none, empty message
- `TodoItem.css`: flex layout, checkbox, text styles, completed state, buttons

## ทดสอบ
1. เพิ่ม todo → เห็นในรายการ
2. คลิก checkbox → ขีดฆ่า
3. Double-click → แก้ไขได้
4. คลิกลบ → หายไป
5. ไม่มี todo → เห็นข้อความ "ยังไม่มีรายการ"

## Copilot Prompt ที่ใช้ได้
- `/implement-ui`
- `/implement-feature`
